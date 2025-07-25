# 🧠 Jagantara Indexer

The **Jagantara Indexer** is a 🤔[Ponder](https://ponder.sh/) project that indexes on-chain data from the **Lisk blockchain** and exposes it via a **GraphQL API**.

It supports querying data for:

- 🪙 **Stakes**
- 💸 **Unstakes**
- 🎁 **Reward Claims**

---

## 🔗 Why Lisk?

Jagantara is built on **Lisk** because it's:

- 🚀 **Fast**: Near-instant block finality
- 💸 **Cheap**: Ultra-low transaction fees
- 🔒 **Secure**: Backed by a robust consensus mechanism
- 🧱 **Modular**: Ideal for scalable, dApp-friendly architecture

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
