const express = require('express');
const { getAllCompanies } = require('./apiMethods');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('VIBE CHECK!');
});

app.get('/companies', async (req, res) => {
	// get all the companies info
	const companies = await getAllCompanies();
	res.send(companies);
});

// Make function for the node server to start (listen)
const startListen = () => {
	app.listen(port, () => {
		console.log(`Vibe check at http://localhost:${port}`);
	});
};

// Make function that calls all the necessary setup functions
async function bootApp() {
	await startListen();
}

// Call this function to start all the setup functions
bootApp();
