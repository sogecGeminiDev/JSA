/*
npm init -y
npm install ws
server.js
node server.js
client.html
*/


const WebSocket = require('ws');

// Crée un serveur WebSocket sur le port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connecté');

    // Écoute les messages du client
    ws.on('message', (msg) => {
        const textMessage = msg.toString();  // Convertir le Buffer en texte
        console.log('Message reçu :', textMessage);
        //console.log('Message reçu :', message);

        // Répond au client
        ws.send(`Serveur: Reçu votre message - ${msg}`);
    });

    // Envoie un message au client quand il se connecte
    ws.send('Serveur: Connexion réussie !');
});

console.log('Serveur WebSocket démarré sur ws://localhost:8080');
