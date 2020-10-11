const { getCrucialData, getDetailedData } = require('./dataHelpers');
const base = require('./base');

const getAllCompanies = async () => {
	// TODO: get more robust solution when we get more than 100 records,
	// because this is looking at first page only
	const data = await base('Companies').select().firstPage();
	const companies = data.map((cData) => getCrucialData(cData));

	console.log(`Fetched ${companies.length} companies`);
	return companies;
};

const getOneCompany = async (id) => {
	const fullData = await base('Companies').find(id);
	const companyDetails = await getDetailedData(fullData);

	console.log(`Got information for Company: ${companyDetails.name}`);
	return companyDetails;
};

module.exports = {
	getAllCompanies,
	getOneCompany
};
