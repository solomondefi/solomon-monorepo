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

export interface SlmJudgementInterface extends ethers.utils.Interface {
  functions: {
    "disputes(address)": FunctionFragment;
    "getJurors(address)": FunctionFragment;
    "initializeDispute(address,uint16,uint256)": FunctionFragment;
    "jurorList(address,uint256)": FunctionFragment;
    "jurorSelectionIndex(address)": FunctionFragment;
    "minJurorCount()": FunctionFragment;
    "setJurors(address)": FunctionFragment;
    "setMinJurorCount(uint16)": FunctionFragment;
    "setStakerManager(address)": FunctionFragment;
    "setStakerPool()": FunctionFragment;
    "stakerManager()": FunctionFragment;
    "stakerPool(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vote(address,uint8)": FunctionFragment;
    "voteStatus(address)": FunctionFragment;
    "voters(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "disputes", values: [string]): string;
  encodeFunctionData(functionFragment: "getJurors", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initializeDispute",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "jurorList",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "jurorSelectionIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "minJurorCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setJurors", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMinJurorCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakerManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakerPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakerManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakerPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "voteStatus", values: [string]): string;
  encodeFunctionData(functionFragment: "voters", values: [string]): string;

  decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getJurors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jurorList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "jurorSelectionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minJurorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setJurors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinJurorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakerManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakerManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakerPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voteStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SlmJudgement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SlmJudgementInterface;

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
    disputes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        merchantVoteCount: number;
        buyerVoteCount: number;
        quorum: number;
      }
    >;

    getJurors(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    initializeDispute(
      slmContract: string,
      quorum: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    jurorList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    jurorSelectionIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    minJurorCount(overrides?: CallOverrides): Promise<[number]>;

    setJurors(
      slmContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinJurorCount(
      newMinJurorCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakerManager(
      newStakerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakerPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakerManager(overrides?: CallOverrides): Promise<[string]>;

    stakerPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      slmContract: string,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteStatus(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    voters(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  disputes(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number] & {
      merchantVoteCount: number;
      buyerVoteCount: number;
      quorum: number;
    }
  >;

  getJurors(
    slmContract: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  initializeDispute(
    slmContract: string,
    quorum: BigNumberish,
    endTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  jurorList(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  jurorSelectionIndex(arg0: string, overrides?: CallOverrides): Promise<number>;

  minJurorCount(overrides?: CallOverrides): Promise<number>;

  setJurors(
    slmContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinJurorCount(
    newMinJurorCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakerManager(
    newStakerManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakerPool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakerManager(overrides?: CallOverrides): Promise<string>;

  stakerPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    slmContract: string,
    _vote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteStatus(slmContract: string, overrides?: CallOverrides): Promise<number>;

  voters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    disputes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        merchantVoteCount: number;
        buyerVoteCount: number;
        quorum: number;
      }
    >;

    getJurors(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    initializeDispute(
      slmContract: string,
      quorum: BigNumberish,
      endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    jurorList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jurorSelectionIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    minJurorCount(overrides?: CallOverrides): Promise<number>;

    setJurors(slmContract: string, overrides?: CallOverrides): Promise<void>;

    setMinJurorCount(
      newMinJurorCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakerManager(
      newStakerManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakerPool(overrides?: CallOverrides): Promise<void>;

    stakerManager(overrides?: CallOverrides): Promise<string>;

    stakerPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      slmContract: string,
      _vote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    voteStatus(slmContract: string, overrides?: CallOverrides): Promise<number>;

    voters(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
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
    disputes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getJurors(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeDispute(
      slmContract: string,
      quorum: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    jurorList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jurorSelectionIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minJurorCount(overrides?: CallOverrides): Promise<BigNumber>;

    setJurors(
      slmContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinJurorCount(
      newMinJurorCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakerManager(
      newStakerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakerPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakerManager(overrides?: CallOverrides): Promise<BigNumber>;

    stakerPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      slmContract: string,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteStatus(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    disputes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getJurors(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeDispute(
      slmContract: string,
      quorum: BigNumberish,
      endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    jurorList(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jurorSelectionIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minJurorCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setJurors(
      slmContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinJurorCount(
      newMinJurorCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakerManager(
      newStakerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakerPool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakerManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakerPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      slmContract: string,
      _vote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteStatus(
      slmContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
