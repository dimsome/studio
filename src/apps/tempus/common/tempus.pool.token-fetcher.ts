import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetDisplayPropsParams,
  GetPricePerShareParams,
  GetUnderlyingTokensParams,
} from '~position/template/app-token.template.types';

import { TempusContractFactory, TempusPyToken } from '../contracts';

import { getTempusData } from './tempus.datasource';

@Injectable()
export abstract class TempusPoolTokenFetcher extends AppTokenTemplatePositionFetcher<TempusPyToken> {
  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(TempusContractFactory) protected readonly contractFactory: TempusContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): TempusPyToken {
    return this.contractFactory.tempusPyToken({ address, network: this.network });
  }

  async getAddresses() {
    const data = await getTempusData(this.network);
    return data.tempusPools.flatMap(v => [v.principalsAddress, v.yieldsAddress]);
  }

  async getUnderlyingTokenAddresses({ contract, multicall }: GetUnderlyingTokensParams<TempusPyToken>) {
    const poolAddress = await contract.pool();
    const pool = multicall.wrap(this.contractFactory.tempusPool({ address: poolAddress, network: this.network }));
    return [await pool.backingToken()];
  }

  async getPricePerShare({ contract, appToken }: GetPricePerShareParams<TempusPyToken>) {
    const pricePerShareRaw = await contract.getPricePerFullShareStored();
    return Number(pricePerShareRaw) / 10 ** Number(appToken.decimals);
  }

  async getLabel({ appToken, contract, multicall }: GetDisplayPropsParams<TempusPyToken>) {
    const kindLabel = (await contract.kind()) === 1 ? 'Yield' : 'Principal';
    const poolAddress = await contract.pool();
    const pool = this.contractFactory.tempusPool({ address: poolAddress, network: this.network });
    const maturity = await multicall.wrap(pool).maturityTime();
    return `${getLabelFromToken(appToken.tokens[0])} ${kindLabel} Share - ${moment.unix(Number(maturity)).format('L')}`;
  }
}
