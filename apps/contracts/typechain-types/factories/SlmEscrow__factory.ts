/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SlmEscrow, SlmEscrowInterface } from "../SlmEscrow";

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
        name: "_p1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_p2",
        type: "address",
      },
    ],
    name: "initializeEscrow",
    outputs: [],
    stateMutability: "payable",
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
    name: "initiateDispute",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "party1",
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
    name: "party1Evidence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "party1EvidenceURL",
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
    name: "party2",
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
    name: "party2Evidence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "party2EvidenceURL",
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
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405262093a806008556000600960006101000a81548160ff0219169083600481111561003157610030610088565b5b021790555034801561004257600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100b7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b612178806100c66000396000f3fe6080604052600436106100e85760003560e01c806361a6a2851161008a578063c19d93fb11610059578063c19d93fb1461029f578063cd6fce88146102ca578063f2fde38b146102f3578063fc0c546a1461031c576100e8565b806361a6a285146102045780636470f3cf1461022f57806369b853b81461024b5780636b8e463714610274576100e8565b80632561deff116100c65780632561deff146101585780632d90202114610183578063573255f4146101ae5780635bf31d4d146101d9576100e8565b806307f14511146100ed57806321dd464f1461011657806324600fc314610141575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f91906116ba565b610347565b005b34801561012257600080fd5b5061012b6104a8565b604051610138919061178b565b60405180910390f35b34801561014d57600080fd5b5061015661053a565b005b34801561016457600080fd5b5061016d610864565b60405161017a91906117ee565b60405180910390f35b34801561018f57600080fd5b5061019861088e565b6040516101a591906117ee565b60405180910390f35b3480156101ba57600080fd5b506101c36108b8565b6040516101d09190611868565b60405180910390f35b3480156101e557600080fd5b506101ee6108de565b6040516101fb919061189c565b60405180910390f35b34801561021057600080fd5b506102196108e4565b604051610226919061178b565b60405180910390f35b610249600480360381019061024491906118e3565b610976565b005b34801561025757600080fd5b50610272600480360381019061026d91906116ba565b610992565b005b34801561028057600080fd5b5061028961099e565b604051610296919061189c565b60405180910390f35b3480156102ab57600080fd5b506102b46109a4565b6040516102c191906119c1565b60405180910390f35b3480156102d657600080fd5b506102f160048036038101906102ec91906116ba565b6109b7565b005b3480156102ff57600080fd5b5061031a600480360381019061031591906119dc565b6109c3565b005b34801561032857600080fd5b50610331610b7e565b60405161033e9190611a2a565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103f05750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042690611a91565b60405180910390fd5b610437610ba4565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561049b5761049681610c76565b6104a5565b6104a481610e9b565b5b50565b6060600680546104b790611ae0565b80601f01602080910402602001604051908101604052809291908181526020018280546104e390611ae0565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105e35750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061990611b5e565b60405180910390fd5b6003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663895972d4306040518263ffffffff1660e01b815260040161067f91906117ee565b60206040518083038186803b15801561069757600080fd5b505afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cf9190611bb7565b60ff1614610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070990611c30565b60405180910390fd5b6003600960006101000a81548160ff021916908360048111156107385761073761194a565b5b02179055506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663895972d4306040518263ffffffff1660e01b815260040161079a91906117ee565b60206040518083038186803b1580156107b257600080fd5b505afa1580156107c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ea9190611bb7565b905060028160ff16141561082857610823600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166110c0565b610861565b60038160ff1614156108605761085f600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166110c0565b5b5b50565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b6060600580546108f390611ae0565b80601f016020809104026020016040519081016040528092919081815260200182805461091f90611ae0565b801561096c5780601f106109415761010080835404028352916020019161096c565b820191906000526020600020905b81548152906001019060200180831161094f57829003601f168201915b5050505050905090565b61098284848484611312565b62ed4e0060088190555050505050565b61099b81610e9b565b50565b60075481565b600960009054906101000a900460ff1681565b6109c081610c76565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890611c9c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab890611d2e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002600960006101000a81548160ff02191690836004811115610bca57610bc961194a565b5b0217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f9dbe511c34d49de83e38099fccc7aaad8bf641f2de99b3dbfe4f7803b246e05660405160405180910390a342600781905550565b60026004811115610c8a57610c8961194a565b5b600960009054906101000a900460ff166004811115610cac57610cab61194a565b5b14610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce390611d9a565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7390611e06565b60405180910390fd5b6000815111610dc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db790611e72565b60405180910390fd5b600060058054610dcf90611ae0565b905014610e11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0890611ede565b60405180910390fd5b8060059080519060200190610e279291906114bd565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fcd6f4738a60389825e6858f99b4dbc97d7552b5b58a33f144baae2cceca95bc682604051610e90919061178b565b60405180910390a250565b60026004811115610eaf57610eae61194a565b5b600960009054906101000a900460ff166004811115610ed157610ed061194a565b5b14610f11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0890611d9a565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fa1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9890611e06565b60405180910390fd5b6000815111610fe5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdc90611e72565b60405180910390fd5b600060068054610ff490611ae0565b905014611036576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102d90611ede565b60405180910390fd5b806006908051906020019061104c9291906114bd565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fcd6f4738a60389825e6858f99b4dbc97d7552b5b58a33f144baae2cceca95bc6826040516110b5919061178b565b60405180910390a250565b6008546007546110d09190611f2d565b4211611111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110890611fcf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156111b4578073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156111ae573d6000803e3d6000fd5b5061130f565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161124e91906117ee565b60206040518083038186803b15801561126657600080fd5b505afa15801561127a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129e919061201b565b6040518363ffffffff1660e01b81526004016112bb929190612048565b602060405180830381600087803b1580156112d557600080fd5b505af11580156112e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d91906120a9565b505b50565b600060048111156113265761132561194a565b5b600960009054906101000a900460ff1660048111156113485761134761194a565b5b14611388576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137f90612122565b60405180910390fd5b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600960006101000a81548160ff021916908360048111156114b2576114b161194a565b5b021790555050505050565b8280546114c990611ae0565b90600052602060002090601f0160209004810192826114eb5760008555611532565b82601f1061150457805160ff1916838001178555611532565b82800160010185558215611532579182015b82811115611531578251825591602001919060010190611516565b5b50905061153f9190611543565b5090565b5b8082111561155c576000816000905550600101611544565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115c78261157e565b810181811067ffffffffffffffff821117156115e6576115e561158f565b5b80604052505050565b60006115f9611560565b905061160582826115be565b919050565b600067ffffffffffffffff8211156116255761162461158f565b5b61162e8261157e565b9050602081019050919050565b82818337600083830152505050565b600061165d6116588461160a565b6115ef565b90508281526020810184848401111561167957611678611579565b5b61168484828561163b565b509392505050565b600082601f8301126116a1576116a0611574565b5b81356116b184826020860161164a565b91505092915050565b6000602082840312156116d0576116cf61156a565b5b600082013567ffffffffffffffff8111156116ee576116ed61156f565b5b6116fa8482850161168c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561173d578082015181840152602081019050611722565b8381111561174c576000848401525b50505050565b600061175d82611703565b611767818561170e565b935061177781856020860161171f565b6117808161157e565b840191505092915050565b600060208201905081810360008301526117a58184611752565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117d8826117ad565b9050919050565b6117e8816117cd565b82525050565b600060208201905061180360008301846117df565b92915050565b6000819050919050565b600061182e611829611824846117ad565b611809565b6117ad565b9050919050565b600061184082611813565b9050919050565b600061185282611835565b9050919050565b61186281611847565b82525050565b600060208201905061187d6000830184611859565b92915050565b6000819050919050565b61189681611883565b82525050565b60006020820190506118b1600083018461188d565b92915050565b6118c0816117cd565b81146118cb57600080fd5b50565b6000813590506118dd816118b7565b92915050565b600080600080608085870312156118fd576118fc61156a565b5b600061190b878288016118ce565b945050602061191c878288016118ce565b935050604061192d878288016118ce565b925050606061193e878288016118ce565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061198a5761198961194a565b5b50565b600081905061199b82611979565b919050565b60006119ab8261198d565b9050919050565b6119bb816119a0565b82525050565b60006020820190506119d660008301846119b2565b92915050565b6000602082840312156119f2576119f161156a565b5b6000611a00848285016118ce565b91505092915050565b6000611a1482611835565b9050919050565b611a2481611a09565b82525050565b6000602082019050611a3f6000830184611a1b565b92915050565b7f4f6e6c7920706172746965732063616e20646973707574650000000000000000600082015250565b6000611a7b60188361170e565b9150611a8682611a45565b602082019050919050565b60006020820190508181036000830152611aaa81611a6e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611af857607f821691505b60208210811415611b0c57611b0b611ab1565b5b50919050565b7f4f6e6c7920706172746965732063616e20776974686472617700000000000000600082015250565b6000611b4860198361170e565b9150611b5382611b12565b602082019050919050565b60006020820190508181036000830152611b7781611b3b565b9050919050565b600060ff82169050919050565b611b9481611b7e565b8114611b9f57600080fd5b50565b600081519050611bb181611b8b565b92915050565b600060208284031215611bcd57611bcc61156a565b5b6000611bdb84828501611ba2565b91505092915050565b7f43616e6e6f742077697468647261770000000000000000000000000000000000600082015250565b6000611c1a600f8361170e565b9150611c2582611be4565b602082019050919050565b60006020820190508181036000830152611c4981611c0d565b9050919050565b7f4f6e6c79206f776e657220697320616c6c6f77656420746f2063616c6c000000600082015250565b6000611c86601d8361170e565b9150611c9182611c50565b602082019050919050565b60006020820190508181036000830152611cb581611c79565b9050919050565b7f446f6e27742061737369676e206f776e65727368697020746f206e756c6c206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611d1860268361170e565b9150611d2382611cbc565b604082019050919050565b60006020820190508181036000830152611d4781611d0b565b9050919050565b7f4e6f206469737075746520616374697665000000000000000000000000000000600082015250565b6000611d8460118361170e565b9150611d8f82611d4e565b602082019050919050565b60006020820190508181036000830152611db381611d77565b9050919050565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b6000611df0600e8361170e565b9150611dfb82611dba565b602082019050919050565b60006020820190508181036000830152611e1f81611de3565b9050919050565b7f45766964656e6365207265717569726564000000000000000000000000000000600082015250565b6000611e5c60118361170e565b9150611e6782611e26565b602082019050919050565b60006020820190508181036000830152611e8b81611e4f565b9050919050565b7f45766964656e636520616c72656164792070726f766964656400000000000000600082015250565b6000611ec860198361170e565b9150611ed382611e92565b602082019050919050565b60006020820190508181036000830152611ef781611ebb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f3882611883565b9150611f4383611883565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f7857611f77611efe565b5b828201905092915050565b7f43616e6e6f742077697468647261772079657400000000000000000000000000600082015250565b6000611fb960138361170e565b9150611fc482611f83565b602082019050919050565b60006020820190508181036000830152611fe881611fac565b9050919050565b611ff881611883565b811461200357600080fd5b50565b60008151905061201581611fef565b92915050565b6000602082840312156120315761203061156a565b5b600061203f84828501612006565b91505092915050565b600060408201905061205d60008301856117df565b61206a602083018461188d565b9392505050565b60008115159050919050565b61208681612071565b811461209157600080fd5b50565b6000815190506120a38161207d565b92915050565b6000602082840312156120bf576120be61156a565b5b60006120cd84828501612094565b91505092915050565b7f4f6e6c7920696e697469616c697a65206f6e6365000000000000000000000000600082015250565b600061210c60148361170e565b9150612117826120d6565b602082019050919050565b6000602082019050818103600083015261213b816120ff565b905091905056fea26469706673582212207a81d213bf41aec19a8c49cdbea17ebb69b25ec38748444bdc4ab8bcac15174764736f6c63430008090033";

type SlmEscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SlmEscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SlmEscrow__factory extends ContractFactory {
  constructor(...args: SlmEscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SlmEscrow> {
    return super.deploy(overrides || {}) as Promise<SlmEscrow>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SlmEscrow {
    return super.attach(address) as SlmEscrow;
  }
  connect(signer: Signer): SlmEscrow__factory {
    return super.connect(signer) as SlmEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SlmEscrowInterface {
    return new utils.Interface(_abi) as SlmEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlmEscrow {
    return new Contract(address, _abi, signerOrProvider) as SlmEscrow;
  }
}
