/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SlmPreorder, SlmPreorderInterface } from "../SlmPreorder";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "party1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "party2",
        type: "address",
      },
    ],
    name: "DisputeInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "evidenceURL",
        type: "string",
      },
    ],
    name: "Evidence",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Funded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyerEvidenceURL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyerWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "discount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disputePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disputeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_judge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_merchant",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_discount",
        type: "uint8",
      },
    ],
    name: "initializePreorder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "judge",
    outputs: [
      {
        internalType: "contract SlmJudgement",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merchant",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_evidenceURL",
        type: "string",
      },
    ],
    name: "merchantEvidence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "merchantEvidenceURL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merchantWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_evidenceURL",
        type: "string",
      },
    ],
    name: "requestRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum SlmShared.TransactionState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405262093a806008556000600960006101000a81548160ff0219169083600481111561003157610030610088565b5b021790555034801561004257600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100b7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6121b5806100c66000396000f3fe6080604052600436106100f35760003560e01c8063a5ff76511161008a578063dc61cfbd11610059578063dc61cfbd146102d7578063e02b2c39146102ee578063f2fde38b14610317578063fc0c546a14610340576100f3565b8063a5ff76511461023c578063c19d93fb14610267578063c38821fc14610292578063d169e543146102bb576100f3565b80636b6f4a9d116100c65780636b6f4a9d146101a45780636b8e4637146101cf5780637150d8ae146101fa5780637cc947d014610225576100f3565b8063099a17c3146100f85780631d6c200914610123578063573255f41461014e5780635bf31d4d14610179575b600080fd5b34801561010457600080fd5b5061010d61036b565b60405161011a9190611577565b60405180910390f35b34801561012f57600080fd5b506101386103fd565b6040516101459190611577565b60405180910390f35b34801561015a57600080fd5b5061016361048f565b6040516101709190611618565b60405180910390f35b34801561018557600080fd5b5061018e6104b5565b60405161019b919061164c565b60405180910390f35b3480156101b057600080fd5b506101b96104bb565b6040516101c69190611683565b60405180910390f35b3480156101db57600080fd5b506101e46104ce565b6040516101f1919061164c565b60405180910390f35b34801561020657600080fd5b5061020f6104d4565b60405161021c91906116bf565b60405180910390f35b34801561023157600080fd5b5061023a6104fe565b005b34801561024857600080fd5b5061025161069f565b60405161025e91906116bf565b60405180910390f35b34801561027357600080fd5b5061027c6106c9565b6040516102899190611751565b60405180910390f35b34801561029e57600080fd5b506102b960048036038101906102b491906118b5565b6106dc565b005b6102d560048036038101906102d09190611956565b610765565b005b3480156102e357600080fd5b506102ec610793565b005b3480156102fa57600080fd5b50610315600480360381019061031091906118b5565b610935565b005b34801561032357600080fd5b5061033e600480360381019061033991906119d1565b610941565b005b34801561034c57600080fd5b50610355610afc565b6040516103629190611a1f565b60405180910390f35b60606006805461037a90611a69565b80601f01602080910402602001604051908101604052809291908181526020018280546103a690611a69565b80156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b5050505050905090565b60606005805461040c90611a69565b80601f016020809104026020016040519081016040528092919081815260200182805461043890611a69565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b5050505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b600960019054906101000a900460ff1681565b60075481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105066104d4565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610573576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056a90611ae7565b60405180910390fd5b60028060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663895972d4306040518263ffffffff1660e01b81526004016105cf91906116bf565b60206040518083038186803b1580156105e757600080fd5b505afa1580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f9190611b1c565b60ff1614610662576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065990611b95565b60405180910390fd5b6003600960006101000a81548160ff02191690836004811115610688576106876116da565b5b021790555061069d6106986104d4565b610b22565b565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600960009054906101000a900460ff1681565b6106e46104d4565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890611c01565b60405180910390fd5b610759610d74565b61076281610e46565b50565b6107718585848661106b565b80600960016101000a81548160ff021916908360ff1602179055505050505050565b61079b61069f565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff90611c6d565b60405180910390fd5b6003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663895972d4306040518263ffffffff1660e01b815260040161086591906116bf565b60206040518083038186803b15801561087d57600080fd5b505afa158015610891573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b59190611b1c565b60ff16146108f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ef90611b95565b60405180910390fd5b6004600960006101000a81548160ff0219169083600481111561091e5761091d6116da565b5b021790555061093361092e61069f565b610b22565b565b61093e81611216565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c690611cd9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3690611d6b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600854600754610b329190611dba565b4211610b73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6a90611e5c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c16578073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610c10573d6000803e3d6000fd5b50610d71565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610cb091906116bf565b60206040518083038186803b158015610cc857600080fd5b505afa158015610cdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d009190611ea8565b6040518363ffffffff1660e01b8152600401610d1d929190611ed5565b602060405180830381600087803b158015610d3757600080fd5b505af1158015610d4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6f9190611f36565b505b50565b6002600960006101000a81548160ff02191690836004811115610d9a57610d996116da565b5b0217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f9dbe511c34d49de83e38099fccc7aaad8bf641f2de99b3dbfe4f7803b246e05660405160405180910390a342600781905550565b60026004811115610e5a57610e596116da565b5b600960009054906101000a900460ff166004811115610e7c57610e7b6116da565b5b14610ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb390611faf565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f439061201b565b60405180910390fd5b6000815111610f90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8790612087565b60405180910390fd5b600060058054610f9f90611a69565b905014610fe1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd8906120f3565b60405180910390fd5b8060059080519060200190610ff792919061143b565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fcd6f4738a60389825e6858f99b4dbc97d7552b5b58a33f144baae2cceca95bc6826040516110609190611577565b60405180910390a250565b6000600481111561107f5761107e6116da565b5b600960009054906101000a900460ff1660048111156110a1576110a06116da565b5b146110e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d89061215f565b60405180910390fd5b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600960006101000a81548160ff0219169083600481111561120b5761120a6116da565b5b021790555050505050565b6002600481111561122a576112296116da565b5b600960009054906101000a900460ff16600481111561124c5761124b6116da565b5b1461128c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128390611faf565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461131c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113139061201b565b60405180910390fd5b6000815111611360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135790612087565b60405180910390fd5b60006006805461136f90611a69565b9050146113b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a8906120f3565b60405180910390fd5b80600690805190602001906113c792919061143b565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fcd6f4738a60389825e6858f99b4dbc97d7552b5b58a33f144baae2cceca95bc6826040516114309190611577565b60405180910390a250565b82805461144790611a69565b90600052602060002090601f01602090048101928261146957600085556114b0565b82601f1061148257805160ff19168380011785556114b0565b828001600101855582156114b0579182015b828111156114af578251825591602001919060010190611494565b5b5090506114bd91906114c1565b5090565b5b808211156114da5760008160009055506001016114c2565b5090565b600081519050919050565b600082825260208201905092915050565b60005b838110156115185780820151818401526020810190506114fd565b83811115611527576000848401525b50505050565b6000601f19601f8301169050919050565b6000611549826114de565b61155381856114e9565b93506115638185602086016114fa565b61156c8161152d565b840191505092915050565b60006020820190508181036000830152611591818461153e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006115de6115d96115d484611599565b6115b9565b611599565b9050919050565b60006115f0826115c3565b9050919050565b6000611602826115e5565b9050919050565b611612816115f7565b82525050565b600060208201905061162d6000830184611609565b92915050565b6000819050919050565b61164681611633565b82525050565b6000602082019050611661600083018461163d565b92915050565b600060ff82169050919050565b61167d81611667565b82525050565b60006020820190506116986000830184611674565b92915050565b60006116a982611599565b9050919050565b6116b98161169e565b82525050565b60006020820190506116d460008301846116b0565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061171a576117196116da565b5b50565b600081905061172b82611709565b919050565b600061173b8261171d565b9050919050565b61174b81611730565b82525050565b60006020820190506117666000830184611742565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117c28261152d565b810181811067ffffffffffffffff821117156117e1576117e061178a565b5b80604052505050565b60006117f461176c565b905061180082826117b9565b919050565b600067ffffffffffffffff8211156118205761181f61178a565b5b6118298261152d565b9050602081019050919050565b82818337600083830152505050565b600061185861185384611805565b6117ea565b90508281526020810184848401111561187457611873611785565b5b61187f848285611836565b509392505050565b600082601f83011261189c5761189b611780565b5b81356118ac848260208601611845565b91505092915050565b6000602082840312156118cb576118ca611776565b5b600082013567ffffffffffffffff8111156118e9576118e861177b565b5b6118f584828501611887565b91505092915050565b6119078161169e565b811461191257600080fd5b50565b600081359050611924816118fe565b92915050565b61193381611667565b811461193e57600080fd5b50565b6000813590506119508161192a565b92915050565b600080600080600060a0868803121561197257611971611776565b5b600061198088828901611915565b955050602061199188828901611915565b94505060406119a288828901611915565b93505060606119b388828901611915565b92505060806119c488828901611941565b9150509295509295909350565b6000602082840312156119e7576119e6611776565b5b60006119f584828501611915565b91505092915050565b6000611a09826115e5565b9050919050565b611a19816119fe565b82525050565b6000602082019050611a346000830184611a10565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611a8157607f821691505b60208210811415611a9557611a94611a3a565b5b50919050565b7f4f6e6c792062757965722063616e207769746864726177000000000000000000600082015250565b6000611ad16017836114e9565b9150611adc82611a9b565b602082019050919050565b60006020820190508181036000830152611b0081611ac4565b9050919050565b600081519050611b168161192a565b92915050565b600060208284031215611b3257611b31611776565b5b6000611b4084828501611b07565b91505092915050565b7f43616e6e6f742077697468647261770000000000000000000000000000000000600082015250565b6000611b7f600f836114e9565b9150611b8a82611b49565b602082019050919050565b60006020820190508181036000830152611bae81611b72565b9050919050565b7f4f6e6c792062757965722063616e206368617267656261636b00000000000000600082015250565b6000611beb6019836114e9565b9150611bf682611bb5565b602082019050919050565b60006020820190508181036000830152611c1a81611bde565b9050919050565b7f4f6e6c79206d65726368616e742063616e207769746864726177000000000000600082015250565b6000611c57601a836114e9565b9150611c6282611c21565b602082019050919050565b60006020820190508181036000830152611c8681611c4a565b9050919050565b7f4f6e6c79206f776e657220697320616c6c6f77656420746f2063616c6c000000600082015250565b6000611cc3601d836114e9565b9150611cce82611c8d565b602082019050919050565b60006020820190508181036000830152611cf281611cb6565b9050919050565b7f446f6e27742061737369676e206f776e65727368697020746f206e756c6c206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611d556026836114e9565b9150611d6082611cf9565b604082019050919050565b60006020820190508181036000830152611d8481611d48565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611dc582611633565b9150611dd083611633565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e0557611e04611d8b565b5b828201905092915050565b7f43616e6e6f742077697468647261772079657400000000000000000000000000600082015250565b6000611e466013836114e9565b9150611e5182611e10565b602082019050919050565b60006020820190508181036000830152611e7581611e39565b9050919050565b611e8581611633565b8114611e9057600080fd5b50565b600081519050611ea281611e7c565b92915050565b600060208284031215611ebe57611ebd611776565b5b6000611ecc84828501611e93565b91505092915050565b6000604082019050611eea60008301856116b0565b611ef7602083018461163d565b9392505050565b60008115159050919050565b611f1381611efe565b8114611f1e57600080fd5b50565b600081519050611f3081611f0a565b92915050565b600060208284031215611f4c57611f4b611776565b5b6000611f5a84828501611f21565b91505092915050565b7f4e6f206469737075746520616374697665000000000000000000000000000000600082015250565b6000611f996011836114e9565b9150611fa482611f63565b602082019050919050565b60006020820190508181036000830152611fc881611f8c565b9050919050565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b6000612005600e836114e9565b915061201082611fcf565b602082019050919050565b6000602082019050818103600083015261203481611ff8565b9050919050565b7f45766964656e6365207265717569726564000000000000000000000000000000600082015250565b60006120716011836114e9565b915061207c8261203b565b602082019050919050565b600060208201905081810360008301526120a081612064565b9050919050565b7f45766964656e636520616c72656164792070726f766964656400000000000000600082015250565b60006120dd6019836114e9565b91506120e8826120a7565b602082019050919050565b6000602082019050818103600083015261210c816120d0565b9050919050565b7f4f6e6c7920696e697469616c697a65206f6e6365000000000000000000000000600082015250565b60006121496014836114e9565b915061215482612113565b602082019050919050565b600060208201905081810360008301526121788161213c565b905091905056fea2646970667358221220b76dd798a79b9fe97fe8812a6e37f69341c0a1ecf0ac70f21c6e9ee403ddda0b64736f6c63430008090033";

type SlmPreorderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SlmPreorderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SlmPreorder__factory extends ContractFactory {
  constructor(...args: SlmPreorderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SlmPreorder> {
    return super.deploy(overrides || {}) as Promise<SlmPreorder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SlmPreorder {
    return super.attach(address) as SlmPreorder;
  }
  connect(signer: Signer): SlmPreorder__factory {
    return super.connect(signer) as SlmPreorder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SlmPreorderInterface {
    return new utils.Interface(_abi) as SlmPreorderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlmPreorder {
    return new Contract(address, _abi, signerOrProvider) as SlmPreorder;
  }
}
