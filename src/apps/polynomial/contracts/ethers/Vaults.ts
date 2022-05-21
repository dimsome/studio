/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface VaultsInterface extends utils.Interface {
  functions: {
    'getAllBalances(address,address[],address[])': FunctionFragment;
    'getPerformance(uint256,address)': FunctionFragment;
    'getTokenBalances(address,address[])': FunctionFragment;
    'getUserBalance(address,address)': FunctionFragment;
    'getUserBalances(address,address[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'getAllBalances'
      | 'getPerformance'
      | 'getTokenBalances'
      | 'getUserBalance'
      | 'getUserBalances',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'getAllBalances', values: [string, string[], string[]]): string;
  encodeFunctionData(functionFragment: 'getPerformance', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'getTokenBalances', values: [string, string[]]): string;
  encodeFunctionData(functionFragment: 'getUserBalance', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getUserBalances', values: [string, string[]]): string;

  decodeFunctionResult(functionFragment: 'getAllBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPerformance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTokenBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserBalances', data: BytesLike): Result;

  events: {};
}

export interface Vaults extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAllBalances(
      _user: string,
      _vaults: string[],
      _tokens: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        _vaultBalances: BigNumber[];
        _vaultShares: BigNumber[];
        _vaultWithdrawsToComplete: BigNumber[];
        _vaultCancellableWithdraw: BigNumber[];
        _balances: BigNumber[];
      }
    >;

    getPerformance(
      _rounds: BigNumberish,
      _vault: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { _indices: BigNumber[] }>;

    getTokenBalances(
      _user: string,
      _tokens: string[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { _balances: BigNumber[] }>;

    getUserBalance(
      _user: string,
      _vault: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _balance: BigNumber;
        _shares: BigNumber;
        _withdrawToComplete: BigNumber;
        _cancellableWithdraw: BigNumber;
      }
    >;

    getUserBalances(
      _user: string,
      _vaults: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        _balances: BigNumber[];
        _shares: BigNumber[];
        _withdrawToComplete: BigNumber[];
        _cancellableWithdraw: BigNumber[];
      }
    >;
  };

  getAllBalances(
    _user: string,
    _vaults: string[],
    _tokens: string[],
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
      _vaultBalances: BigNumber[];
      _vaultShares: BigNumber[];
      _vaultWithdrawsToComplete: BigNumber[];
      _vaultCancellableWithdraw: BigNumber[];
      _balances: BigNumber[];
    }
  >;

  getPerformance(_rounds: BigNumberish, _vault: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  getTokenBalances(_user: string, _tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;

  getUserBalance(
    _user: string,
    _vault: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      _balance: BigNumber;
      _shares: BigNumber;
      _withdrawToComplete: BigNumber;
      _cancellableWithdraw: BigNumber;
    }
  >;

  getUserBalances(
    _user: string,
    _vaults: string[],
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
      _balances: BigNumber[];
      _shares: BigNumber[];
      _withdrawToComplete: BigNumber[];
      _cancellableWithdraw: BigNumber[];
    }
  >;

  callStatic: {
    getAllBalances(
      _user: string,
      _vaults: string[],
      _tokens: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        _vaultBalances: BigNumber[];
        _vaultShares: BigNumber[];
        _vaultWithdrawsToComplete: BigNumber[];
        _vaultCancellableWithdraw: BigNumber[];
        _balances: BigNumber[];
      }
    >;

    getPerformance(_rounds: BigNumberish, _vault: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    getTokenBalances(_user: string, _tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;

    getUserBalance(
      _user: string,
      _vault: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _balance: BigNumber;
        _shares: BigNumber;
        _withdrawToComplete: BigNumber;
        _cancellableWithdraw: BigNumber;
      }
    >;

    getUserBalances(
      _user: string,
      _vaults: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        _balances: BigNumber[];
        _shares: BigNumber[];
        _withdrawToComplete: BigNumber[];
        _cancellableWithdraw: BigNumber[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    getAllBalances(_user: string, _vaults: string[], _tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;

    getPerformance(_rounds: BigNumberish, _vault: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTokenBalances(_user: string, _tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;

    getUserBalance(_user: string, _vault: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUserBalances(_user: string, _vaults: string[], overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllBalances(
      _user: string,
      _vaults: string[],
      _tokens: string[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPerformance(_rounds: BigNumberish, _vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenBalances(_user: string, _tokens: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserBalance(_user: string, _vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserBalances(_user: string, _vaults: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}