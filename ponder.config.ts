import { createConfig } from "ponder";
import { http } from "viem";
import { ERC20_ABI, JAGA_STAKE_ABI } from "./abis/StakeAbi";

export default createConfig({
  chains: {
    monadTestnet: {
      id: 10143,
      rpc: http("https://testnet-rpc.monad.xyz"),
    },
  },
  contracts: {
    JagaStake: {
      chain: "monadTestnet",
      address: "0xB6Dc49E506c5695A3004f3d3946768293a5E7cA6",
      abi: JAGA_STAKE_ABI,
      startBlock: 24804508,
    },
    JagaToken: {
      chain: "monadTestnet",
      address: "0x181bb7749c9bF583cB62832881f98859A734c573",
      abi: ERC20_ABI,
      startBlock: 24804508,
    },
    USDC: {
      chain: "monadTestnet",
      address: "0xeBf52E1C86d75b57f078dD4cD26727cD5cD59ec9",
      abi: ERC20_ABI,
      startBlock: 24804508,
    },
  },
});
