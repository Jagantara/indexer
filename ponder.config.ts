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
      address: "0x5937E869E575a37f8EFc9f496F2cE4dFd1F0E2aD",
      abi: JAGA_STAKE_ABI,
      startBlock: 24819604,
    },
    JagaToken: {
      chain: "monadTestnet",
      address: "0x2FD93A232bEE86af183Cb219dca1a2c379654ba5",
      abi: ERC20_ABI,
      startBlock: 24819604,
    },
    USDC: {
      chain: "monadTestnet",
      address: "0x59104255fDe0Da71B8FfBeE62e187623F35686b7",
      abi: ERC20_ABI,
      startBlock: 24819604,
    },
  },
});
