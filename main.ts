import { PublicKey } from "@solana/web3.js";
import WebSocket from "ws";

// Create a WebSocket connection
const ws = new WebSocket('wss://atlas-mainnet.helius-rpc.com/?api-key=e1230459-efeb-4acd-b500-ba0d89b029da');

const programId = new PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");

const sendRequest = (ws: WebSocket) => {
    const request = {
        jsonrpc: '2.0',
        id: 420,
        method: 'transactionSubscribe',
        params: [
            {
                failed: false,
                vote: false,
                accountInclude: [programId.toBase58()],
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

        const result = messageObj.params.result;
        const logs = result.transaction.meta.logMessages;
        const signature = result.signature; // Extract the signature
        const accountKeys = result.transaction.transaction.message.accountKeys.map((ak: any) => ak.pubkey);

        if (logs && logs.some((log: any) => log.includes('Program log: Instruction: InitializeMint2'))) {
            console.log('New pump.fun token!');
            console.table({ 'tx': signature, "creator": accountKeys[0], "Token": accountKeys[1] })
            console.log('tx:', signature);
            console.log('Creator:', accountKeys[0]);
            console.log('Token:', accountKeys[1]);

            // Log the first and second account keys if they exist

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
