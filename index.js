const express = require('express');
const { getAllCompanies, getOneCompany } = require('./apiMethods');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('VIBE CHECK!');
});

app.get('/companies', async (req, res, next) => {
	// get all the companies info
	try {
		const companies = await getAllCompanies();
		res.send(companies);
	} catch (error) {
		next(error);
	}
});

app.get('/companies/:id', async (req, res, next) => {
	// get all the companies info
	try {
		const { id } = req.params;
		const companies = await getOneCompany(id);
		res.send(companies);
	} catch (error) {
		next(error);
	}
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
