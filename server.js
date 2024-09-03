const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();

// Configurer le serveur CORS Anywhere
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Autorise toutes les requêtes
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy running on ${host}:${port}`);
});

