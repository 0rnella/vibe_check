const express = require('express');
const db = require('./database');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('VIBE CHECK!');
});

// Make function to sync database
const syncDb = () => db.sync({ force: false });

// Make function for the node server to start (listen)
const startListen = () => {
	app.listen(port, () => {
		console.log(`Vibe check at http://localhost:${port}`);
	});
};

// Make function that calls all the necessary setup functions
async function bootApp() {
	await syncDb();
	await startListen();
}

// Call this function to start all the setup functions
bootApp();
