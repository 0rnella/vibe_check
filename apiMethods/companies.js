/* eslint-disable no-underscore-dangle */
const base = require('./base');

const getAllCompanies = async () => {
	// TODO: get more robust solution when we get more than 100 records,
	// because this is looking at first page only
	const companies = await base('Companies').select().firstPage();

	console.log(`Fetched ${companies.length} companies`);
	return companies;
};

module.exports = {
	getAllCompanies
};
