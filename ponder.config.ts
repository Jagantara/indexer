import { createConfig } from "ponder";
import { http } from "viem";
import { ERC20_ABI, JAGA_STAKE_ABI } from "./abis/StakeAbi";

export default createConfig({
  chains: {
    liskTestnet: {
      id: 4202,
      rpc: http("https://rpc.sepolia-api.lisk.com"),
    },
  },
  contracts: {
    JagaStake: {
      chain: "liskTestnet",
      address: "0xe2317847BDaf117b4293A1835738ef458CE5f3D7",
      abi: JAGA_STAKE_ABI,
      startBlock: 25066484,
    },
    JagaToken: {
      chain: "liskTestnet",
      address: "0x5287fcEDEF1f494015982C5196aF6815CB3e11A1",
      abi: ERC20_ABI,
      startBlock: 25066484,
    },
    USDC: {
      chain: "liskTestnet",
      address: "0x0E0F426A812ed0EE7A4777C9c3b0DF5057C56523",
      abi: ERC20_ABI,
      startBlock: 25066484,
    },
  },
});
