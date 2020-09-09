/* eslint-disable no-underscore-dangle */
const express = require('express');
const Airtable = require('airtable');
const db = require('./database');

const base = new Airtable({ apiKey: 'keyGDs7xmrqXvUKG4' }).base('appS12AiYFbn3vSDy');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('VIBE CHECK!');
});

app.get('/companies', async (req, res) => {
	// get all the companies info

	const companies = [];

	await base('Companies').select({
	// Selecting the first 3 records in Grid view:
		maxRecords: 3,
		view: 'Grid view'
	}).eachPage((records, fetchNextPage) => {
	// This function (`page`) will get called for each page of records.

		records.forEach((record) => {
			// console.log('WHAT IS A RECORD', record._rawJson);
			console.log('COMPANIES INFO LENGTH', companies.length);
			companies.push(record._rawJson);
			console.log('Retrieved', record.get('name'));
		});

		console.log('LENGTH AT THE END', companies.length);

		res.send(companies);
		// To fetch the next page of records, call `fetchNextPage`.
		// If there are more records, `page` will get called again.
		// If there are no more records, `done` will get called.
		fetchNextPage();
	}, (err) => {
		if (err) { console.error(err); }
	});
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
