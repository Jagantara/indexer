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
      address: "0x65165BFb8162744E1C5251c1deB196bB270fE1eE",
      abi: JAGA_STAKE_ABI,
      startBlock: 24056228,
    },
    JagaToken: {
      chain: "liskTestnet",
      address: "0x529bB304E550E21938c20D1E27EAa4EE0dB549E6",
      abi: ERC20_ABI,
      startBlock: 24056228,
    },
    USDC: {
      chain: "liskTestnet",
      address: "0xA2D17a5CAEbEC48a32fF945aAF5471Eb9b989345",
      abi: ERC20_ABI,
      startBlock: 24056228,
    },
  },
});
