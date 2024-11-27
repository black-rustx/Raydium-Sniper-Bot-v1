---

# 🚀 Raydium Sniper Bot v1 🎯

Welcome to the **Raydium Sniper Bot v2** repository! This bot is designed to monitor Solana blockchain transactions and detect new token mints on the Raydium platform. This bot use Geyser-enhanced websocket. When a new "Pump.fun" mint occurs, the bot listens for the event and processes relevant information in real-time. Perfect for users looking to track token launches or perform automated trades!

---

## 🔧 **Features**

- **Real-time Event Detection**: Detects new Pump.fun mints on Raydium.
- **Transaction Filtering**: Filters transactions based on the program ID and instruction discriminators.
- **Solana Integration**: Utilizes the Solana blockchain for high-speed transaction monitoring.
- **Telegram Notifications**: (Coming Soon) Get notified on new token mints via Telegram.
- **Efficiency**: Low-latency streaming using WebSockets for Solana transactions.

---

## ⚙️ **How It Works**

1. **Stream Subscription**: The bot establishes a WebSocket connection to a Solana RPC provider (Helius) and subscribes to transaction streams.
2. **Transaction Monitoring**: It filters out the relevant "Pump.fun" program mints based on specific instruction discriminators.
3. **Data Extraction**: When a match is found, the bot extracts the mint-related information and formats it for easy reading.
4. **Real-time Updates**: All matched events are displayed in the console for immediate action.

---

## 📝 **Installation**

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v16+)
- **npm** (v8+)
- **Solana CLI** (optional, for Solana commands)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/RaydiumVolumeBot-v2-using-jupiter.git
   cd RaydiumVolumeBot-v2-using-jupiter
   ```

2. **Install Dependencies**

   Install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Configuration**

   Update the configuration in the `config.js` file with your specific RPC endpoint and token:

   ```js
   const ENDPOINT = "wss://atlas-mainnet.helius-rpc.com";
   const TOKEN = "your-token-here";
   ```

4. **Run the Bot**

   To start the bot, run the following command:

   ```bash
   npm start
   ```

   The bot will begin streaming and display new "Pump.fun" mint events as they are detected.

---

## ⚡ **How to Use**

- Once the bot is running, it will automatically subscribe to the Solana blockchain and listen for new **Pump.fun** mints.
- Whenever a new mint is detected, the bot will display the transaction details such as:
  - Signature
  - Mint address
  - Slot number
- You can extend the bot’s functionality to include additional filters or even integrate it with a trading system.

---

## 🌐 **Contributing**

We welcome contributions! If you want to help improve the bot, please follow these steps:

1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your changes.
3. **Make your modifications** and commit your changes.
4. **Open a Pull Request** to the main repository with a clear description of your changes.

---

## 📋 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 **Support**

If you encounter any issues or have any questions, feel free to open an issue in the repository, or contact us directly via email!

---

## 📦 **Upcoming Features**

- 🎉 **Telegram Notifications**: Real-time updates directly in your Telegram.
- 🔒 **Security Enhancements**: Improved error handling and fail-safe mechanisms.
- ⚡ **Optimized Performance**: Better resource management and scalability.

---

## 💡 **Disclaimer**

This bot is designed for educational purposes and should not be used for illegal activities. Always make sure you follow local regulations when engaging with cryptocurrencies or blockchain projects.

---

### 🌟 **Enjoy Using Raydium Sniper Bot! Happy Trading!** 🌟

---

## 📞 Author

Telegram: [@g0drlc](https://t.me/g0drlc)
