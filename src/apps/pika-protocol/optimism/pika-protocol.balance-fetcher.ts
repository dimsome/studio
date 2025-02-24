import { Inject } from '@nestjs/common';
import { ethers } from 'ethers';

import { drillBalance } from '~app-toolkit';
import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { isClaimable, isSupplied } from '~position/position.utils';
import { Network } from '~types/network.interface';

import { PikaProtocolContractFactory } from '../contracts';
import { PIKA_PROTOCOL_DEFINITION } from '../pika-protocol.definition';

const network = Network.OPTIMISM_MAINNET;

@Register.BalanceFetcher(PIKA_PROTOCOL_DEFINITION.id, network)
export class OptimismPikaProtocolBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(PikaProtocolContractFactory) private readonly pikaProtocolContractFactory: PikaProtocolContractFactory,
  ) {}

  async getBalances(address: string) {
    const [vaultBalances] = await Promise.all([this.getFarmBalances(address)]);
    return presentBalanceFetcherResponse([{ label: 'Vaults', assets: vaultBalances }]);
  }

  pikaProtocolVaultRewards(address: string) {
    const abi = ['function getClaimableReward(address account) external view returns(uint256)'];

    const provider = this.appToolkit.getNetworkProvider(network);

    const contract = new ethers.Contract(address, abi, provider);

    return contract;
  }

  async getFarmBalances(address: string) {
    return this.appToolkit.helpers.contractPositionBalanceHelper.getContractPositionBalances({
      address,
      appId: PIKA_PROTOCOL_DEFINITION.id,
      groupId: PIKA_PROTOCOL_DEFINITION.groups.vault.id,
      network,

      resolveBalances: async ({ address, contractPosition, multicall }) => {
        const rewardAddress = '0x58488bb666d2da33f8e8938dbdd582d2481d4183';
        const contract = this.pikaProtocolContractFactory.pikaProtocolVault({
          address: contractPosition.address,
          network,
        });
        const rewardContract = this.pikaProtocolVaultRewards(rewardAddress);

        const stakedToken = contractPosition.tokens.find(isSupplied)!;
        const rewardToken = contractPosition.tokens.find(isClaimable)!;

        const [stakedBalanceRaw, rewardBalanceRaw] = await Promise.all([
          multicall.wrap(contract).getShareBalance(address),
          multicall.wrap(rewardContract).getClaimableReward(address),
        ]);

        return [
          drillBalance(stakedToken, (Number(stakedBalanceRaw) / 100).toFixed(0)),
          drillBalance(rewardToken, rewardBalanceRaw.toString()),
        ];
      },
    });
  }
}
