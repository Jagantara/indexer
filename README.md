# 🧠 Jagantara Indexer

The **Jagantara Indexer** is a 🤔[Ponder](https://ponder.sh/) project that indexes on-chain data from the **Lisk blockchain** and exposes it via a **GraphQL API**.

It supports querying data for:

- 🪙 **Stakes**
- 💸 **Unstakes**
- 🎁 **Reward Claims**

---

Jagantara Contract on Base Sepolia:

- Mock USDC
  https://sepolia.basescan.org/token/0x37c95286a8b3b88755846de0e16c9b93caa0c073#code

- Mock IDRX
  https://sepolia.basescan.org/address/0x411F6a4452717Ce71576C8AD88550741656DA392#code

- JagaToken
  https://sepolia.basescan.org/address/0x685669079efea9ec17e22d52712ad153a47a22b0#code

- Insurance Manager
  https://sepolia.basescan.org/address/0x39e3a4ef7bf4f8d19f1b4a8254543147c1381da9#code

- Jaga Stake
  https://sepolia.basescan.org/address/0x8ebebf610bfa0b55b58b45b9ce61a2ccf5c68c9d#code

- Mock Morpho Vault
  https://sepolia.basescan.org/address/0xcd0e4070212936be838b5696ee636cd611a61e2b#code

- Claim Manager
  https://sepolia.basescan.org/address/0x023496f9f3d8c1301ec71b8912eaddfdf7f767ba#code

- DAO Governance
  https://sepolia.basescan.org/address/0x01b970195f1cceb1e289d33f4659a57043ffda3f#code

- Morpho Re-invest
  https://sepolia.basescan.org/address/0xc80b0fe072a26a967060974f7911c0e6ce41badc#code


Jagantara Contract on Lisk Sepolia:

- USDC
  https://sepolia-blockscout.lisk.com/token/0xA2D17a5CAEbEC48a32fF945aAF5471Eb9b989345?tab=contract

- JagaToken
  https://sepolia-blockscout.lisk.com/token/0x529bB304E550E21938c20D1E27EAa4EE0dB549E6?tab=contract

- Insurance Manager
  https://sepolia-blockscout.lisk.com/address/0x3A70a20d10381447B5c1DaB62fDcE23Df9079A8E?tab=contract

- Jaga Stake
  https://sepolia-blockscout.lisk.com/address/0x65165BFb8162744E1C5251c1deB196bB270fE1eE?tab=contract

- Morpho
  https://sepolia-blockscout.lisk.com/address/0xFDe181Ca94A77c3C0Bdf225963725a8E4680ADcF?tab=contract

- Claim Manager
  https://sepolia-blockscout.lisk.com/address/0x72aE49071e641e38350EFbE4511C70C119E48875?tab=contract

- DAO Governance
  https://sepolia-blockscout.lisk.com/address/0x43C67E463C7a9aF76c52194A095E69c35edEaAeA?tab=contract

- Morpho Re-invest
  https://sepolia-blockscout.lisk.com/address/0xb09e395a600eA5848f9aE593538F2C584aE23773?tab=contract

---

## 📦 Tech Stack

- 🧠 [Ponder](https://ponder.sh) — for on-chain event indexing
- 🔗 Lisk Testnet — blockchain data source
- 🔍 GraphQL — powerful, flexible query interface

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- `npm` or `yarn`

### 1. Clone the Repo

```bash
git clone https://github.com/Jagantara/indexer.git
cd indexer
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Indexing Locally

```bash
npm run start
# or
yarn start
```

Ponder will connect to the Lisk testnet and expose GraphQL at:

```
http://localhost:42069/graphql
```

---

## 📁 Project Structure

```bash
/indexer
├── abis/                  # Contract ABIs
├── src/
│   ├── lib/               # Utility libraries (e.g., MCP client)
│   └── ponder.config.ts   # Ponder chain & contract config
├── package.json
└── README.md
```

---

## 🧪 Example Query (GraphQL)

```graphql
query {
  stakess(limit: 5, orderBy: "timestamp", orderDirection: "desc") {
    items {
      id
      user
      amount
      timestamp
    }
  }
}
```

---

## 🛠 Dev Commands

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run start` | Start indexer (prod mode) |
| `npm run dev`   | Run in development mode   |
| `npm run build` | Build for deployment      |

---

## 🙌 Credits

- Built with 💙 by [Jagantara](https://github.com/Jagantara)
- Powered by [Ponder](https://ponder.sh) + [Lisk](https://lisk.com/)

---
