
// config/index.tsx

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { defineChain } from 'viem'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Your WalletConnect Cloud project ID
export const projectId = 'cdbfad5c249bec1b6d66e5749c4af29c'

// Create a metadata object
const metadata = {
  name: 'IdentityFrontEnd',
  description: 'Web3Modal Example',
  url: 'localhost', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const ganacheTestNet = /*#__PURE__*/ defineChain({
    id: 1337,
    name: 'Ganache Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['HTTP://127.0.0.1:7545'],
      },
    },
  })

// Create wagmiConfig
const chains = [sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})