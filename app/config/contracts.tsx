export type Contract =  {
    address: string
    abi: any
}

const vehicleH = {
    abi:[
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenIdCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "vehicleContract",
        "outputs": [
          {
            "internalType": "contract Vehicle",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "model",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "year",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "VIN",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "vehicleType",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "fuelType",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "transmissionType",
            "type": "string"
          }
        ],
        "name": "createVehicleNFTApplication",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "setMintable",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "setDeclined",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "mintcustomNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getVehicleInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct VehicleHelper.VehicleInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getNonMintableVehicles",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct VehicleHelper.VehicleInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getChildAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "getApplicationsByAddress",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct VehicleHelper.VehicleInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
}

const vehicleC = {
    abi:[
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "indexed": false,
            "internalType": "struct Vehicle.VehicleInfo",
            "name": "newVehicleInfo",
            "type": "tuple"
          }
        ],
        "name": "VehicleInfoUpdated",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenIdCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo",
            "name": "_vehicleInfo",
            "type": "tuple"
          }
        ],
        "name": "mintNFT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo",
            "name": "_newVehicleInfo",
            "type": "tuple"
          }
        ],
        "name": "editVehicleInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_VIN",
            "type": "string"
          }
        ],
        "name": "getVehicleInfoByVIN",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getVehicleInfoId",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getTokenOwnerById",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_VIN",
            "type": "string"
          }
        ],
        "name": "getTokenOwnerByVIN",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "forceRetrieveToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getAllVehicleInfoByOwner",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pageNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_pageSize",
            "type": "uint256"
          }
        ],
        "name": "getAllVehicles",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "manufacturer",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "VIN",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fuelType",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "transmissionType",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Vehicle.VehicleInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pageSize",
            "type": "uint256"
          }
        ],
        "name": "getAvailablePageCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getCurrentOwnerByTokenId",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_VIN",
            "type": "string"
          }
        ],
        "name": "getCurrentOwnerByVIN",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
}

const LandH = {
    abi:[
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "landContract",
        "outputs": [
          {
            "internalType": "contract Land",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenIdCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "latitude",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "longitude",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "area",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "zoning",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "features",
            "type": "string[]"
          }
        ],
        "name": "createLandApplication",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "setMintable",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "setDeclined",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "mintcustomNFT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getLandInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct LandHelper.LandInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getNonMintableLands",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct LandHelper.LandInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getChildAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "getApplicationsByAddress",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isMintable",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isDeclined",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "isMinted",
                "type": "bool"
              }
            ],
            "internalType": "struct LandHelper.LandInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
}

const LandC = {
    abi:[
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "indexed": false,
            "internalType": "struct Land.LandInfo",
            "name": "newLandInfo",
            "type": "tuple"
          }
        ],
        "name": "LandInfoUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenIdCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Land.LandInfo",
            "name": "_landInfo",
            "type": "tuple"
          }
        ],
        "name": "mintNFT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Land.LandInfo",
            "name": "_newLandInfo",
            "type": "tuple"
          }
        ],
        "name": "editLandInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getLandInfoById",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Land.LandInfo",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getTokenOwnerById",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "forceRetrieveToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getAllLandInfoByOwner",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Land.LandInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pageNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_pageSize",
            "type": "uint256"
          }
        ],
        "name": "getAllLands",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "latitude",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "longitude",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "area",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "zoning",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "features",
                "type": "string[]"
              },
              {
                "internalType": "address",
                "name": "firstOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              }
            ],
            "internalType": "struct Land.LandInfo[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pageSize",
            "type": "uint256"
          }
        ],
        "name": "getAvailablePageCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getCurrentOwnerByTokenId",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
}

export const VehicleHelperContract = {
    address: '0x7EEeB3010AF2C3fAAa8e41e705490437103Bd4a1',
    abi: vehicleH.abi
}
export const VehicleContract = {
    address: '0x83094EB82B23d5abEFf8B67BB298DcfA59667085',
    abi: vehicleC.abi
}
export const LandHelperContract = {
    address: '0xDD2f9C52d081D04BF23D5a055820A7F2e1D171CF',
    abi: LandH.abi
}
export const LandContract = {
    address: '0x853B685ca033F1Dc432b69Ab1f258D276f738d4f',
    abi: LandC.abi
}