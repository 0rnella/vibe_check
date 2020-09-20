const express = require('express');
const {
	getAllCompanies,
	getOneCompany,
	getLinkedData
} = require('./apiMethods');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send('VIBE CHECK!');
});

app.get('/companies', async (req, res, next) => {
	// get all the companies info
	try {
		// set header to allow other people to view response
		res.setHeader('Access-Control-Allow-Origin', '*');

		const companies = await getAllCompanies();
		res.send(companies);
	} catch (error) {
		next(error);
	}
});

app.get('/companies/:id', async (req, res, next) => {
	// get all the companies info
	try {
		// set header to allow other people to view response
		res.setHeader('Access-Control-Allow-Origin', '*');

		const { id } = req.params;
		const company = await getOneCompany(id);

		// list each key that we want as a string
		const companyTables = ['Demographics', 'Lawsuits', 'Labor Practices', 'Political Contributions', 'Effect on Ecosystem'];

		for (let i = 0; i < companyTables.length; i++) {
			const tableName = companyTables[i]; // Demographics
			const tableId = company[tableName][0];

			const tableData = await getLinkedData(tableName, tableId);

			// setting it back on the company object
			company[tableName] = tableData;
		}

		res.send(company);
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
