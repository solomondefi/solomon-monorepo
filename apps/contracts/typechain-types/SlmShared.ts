/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface SlmSharedInterface extends ethers.utils.Interface {
  functions: {
    "disputePeriod()": FunctionFragment;
    "disputeTime()": FunctionFragment;
    "judge()": FunctionFragment;
    "state()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disputePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disputeTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "judge", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "disputePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "judge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DisputeInitiated(address,address)": EventFragment;
    "Evidence(address,string)": EventFragment;
    "Funded(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DisputeInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Evidence"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Funded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type DisputeInitiatedEvent = TypedEvent<
  [string, string],
  { party1: string; party2: string }
>;

export type DisputeInitiatedEventFilter =
  TypedEventFilter<DisputeInitiatedEvent>;

export type EvidenceEvent = TypedEvent<
  [string, string],
  { party: string; evidenceURL: string }
>;

export type EvidenceEventFilter = TypedEventFilter<EvidenceEvent>;

export type FundedEvent = TypedEvent<[BigNumber], { amount: BigNumber }>;

export type FundedEventFilter = TypedEventFilter<FundedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SlmShared extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SlmSharedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    disputePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    disputeTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    judge(overrides?: CallOverrides): Promise<[string]>;

    state(overrides?: CallOverrides): Promise<[number]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  disputePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  disputeTime(overrides?: CallOverrides): Promise<BigNumber>;

  judge(overrides?: CallOverrides): Promise<string>;

  state(overrides?: CallOverrides): Promise<number>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    disputePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    disputeTime(overrides?: CallOverrides): Promise<BigNumber>;

    judge(overrides?: CallOverrides): Promise<string>;

    state(overrides?: CallOverrides): Promise<number>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DisputeInitiated(address,address)"(
      party1?: string | null,
      party2?: string | null
    ): DisputeInitiatedEventFilter;
    DisputeInitiated(
      party1?: string | null,
      party2?: string | null
    ): DisputeInitiatedEventFilter;

    "Evidence(address,string)"(
      party?: string | null,
      evidenceURL?: null
    ): EvidenceEventFilter;
    Evidence(party?: string | null, evidenceURL?: null): EvidenceEventFilter;

    "Funded(uint256)"(amount?: null): FundedEventFilter;
    Funded(amount?: null): FundedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    disputePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    disputeTime(overrides?: CallOverrides): Promise<BigNumber>;

    judge(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disputePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disputeTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    judge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
