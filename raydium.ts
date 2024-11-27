import { PublicKey } from "@solana/web3.js";
import WebSocket from "ws";

// Create a WebSocket connection
const ws = new WebSocket('wss://atlas-mainnet.helius-rpc.com/?api-key=ad8f9b1c-4907-4124-9f74-159d307d1ae3');

const programId = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");

const sendRequest = (ws: WebSocket) => {
    const request = {
        jsonrpc: '2.0',
        id: 420,
        method: 'transactionSubscribe',
        params: [
            {
                failed: false,
                accountInclude: ["675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"],
            },
            {
                commitment: 'confirmed',
                encoding: 'jsonParsed',
                transactionDetails: 'full',
                maxSupportedTransactionVersion: 0,
            },
        ],
    };
    ws.send(JSON.stringify(request));
}

const startPing = (ws: WebSocket) => {
    setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.ping();
            console.log('Ping sent');
        }
    }, 30000); // Ping every 30 seconds
}

ws.on('open', function open() {
    console.log('WebSocket is open');
    sendRequest(ws);
    startPing(ws)
});

ws.on('message', function incoming(data) {
    const messageStr = data.toString('utf8');
    try {
        const messageObj = JSON.parse(messageStr);
        console.log(messageObj)

        const result = messageObj.params.result;
        const logs = result.transaction.meta.logMessages;
        const signature = result.signature; // Extract the signature
        const accountKeys = result.transaction.transaction.message.accountKeys.map((ak: any) => ak.pubkey); // Extract only pubkeys

        if (logs && logs.some((log: any) => log.includes("initialize2: InitializeInstruction2"))) {
            // Log the signature, and the public keys of the AMM ID
            console.log('Transaction signature:', signature);
            console.log('Transaction signature:', accountKeys[0]);
            console.log('Transaction signature:', accountKeys[1]);
            console.log('AMM ID:', accountKeys[2]); // Corrected to the third account for AMM ID
        }
    } catch (e) {
    }
});

ws.on('error', function error(err) {
    console.error('WebSocket error:', err);
});

ws.on('close', function close() {
    console.log('WebSocket is closed');
});
