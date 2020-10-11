/* eslint-disable no-underscore-dangle */
const camelcase = require('lodash.camelcase');
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

const getLinkedData = async (tableName, id) => {
	// now get the actual data in here
	const { fields } = await base(tableName).find(id);
	delete fields.name;
	delete fields.company;
	return fields;
};

const getDetailedData = async (company) => {
	const companyTables = ['Demographics', 'Lawsuits', 'Labor Practices', 'Political Contributions', 'Effect on Ecosystem'];

	const companyDetails = {};
	const companyKeys = Object.keys(company);

	companyKeys.forEach((key) => {
		if (!companyTables.includes(key)) {
			companyDetails[key] = company[key];
		}
	});

	for (let i = 0; i < companyTables.length; i += 1) {
		const tableName = companyTables[i];
		const tableId = company[tableName] && company[tableName][0];

		if (tableId) {
			const tableData = await getLinkedData(tableName, tableId);

			const tableNameCamel = camelcase(tableName);
			companyDetails[tableNameCamel] = tableData;
		}
	}

	return companyDetails;
};

module.exports = {
	getAllCompanies,
	getOneCompany,
	getLinkedData,
	getDetailedData
};
