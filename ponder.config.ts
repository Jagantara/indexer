import { createConfig } from "ponder";
import { http } from "viem";
import { ERC20_ABI, JAGA_STAKE_ABI } from "./abis/StakeAbi";

export default createConfig({
  chains: {
    liskTestnet: {
      id: 4202,
      rpc: http("https://rpc.sepolia-api.lisk.com"),
    },
    baseTestnet: {
      id: 84532,
      rpc: http("https://sepolia.base.org"),
    },
  },
  contracts: {
    JagaStake: {
      chain: "baseTestnet",
      address: "0x8eBEbF610bFa0b55B58b45B9cE61a2cCF5C68C9D",
      abi: JAGA_STAKE_ABI,
      startBlock: 32361234,
    },
    JagaToken: {
      chain: "baseTestnet",
      address: "0x685669079EfeA9EC17E22d52712AD153A47A22B0",
      abi: ERC20_ABI,
      startBlock: 32361234,
    },
    USDC: {
      chain: "baseTestnet",
      address: "0x37C95286A8b3b88755846dE0E16c9B93cAA0c073",
      abi: ERC20_ABI,
      startBlock: 32361234,
    },
  },
});
