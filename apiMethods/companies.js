/* eslint-disable no-underscore-dangle */
const base = require('./base');

const getCrucialData = (fullData) => {
	const company = {
		id: fullData.getId(),
		...fullData._rawJson.fields,
		logo: fullData.get('logo') && fullData.get('logo')[0].thumbnails.large.url
	};

	return company;
};

const getAllCompanies = async () => {
	// TODO: get more robust solution when we get more than 100 records,
	// because this is looking at first page only
	const data = await base('Companies').select().firstPage();
	const companies = data.map((cData) => getCrucialData(cData));

	console.log(`Fetched ${companies.length} companies`);
	return companies;
};

const getOneCompany = async (id) => {
	const data = await base('Companies').find(id);
	const company = getCrucialData(data);

	console.log(`Got information for Company: ${company.name}`);
	return company;
};

module.exports = {
	getAllCompanies,
	getOneCompany
};
