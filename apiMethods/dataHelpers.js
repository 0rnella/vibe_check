const camelcase = require('lodash.camelcase');
const base = require('./base');

const linkedCategories = ['Demographics', 'Lawsuits', 'Labor Practices', 'Political Contributions', 'Effect on Ecosystem'];

const getDataWithoutLinkedCategories = (fullCompanyData) => {
	const leanCompanyData = {};
	const companyKeys = Object.keys(fullCompanyData.fields);

	companyKeys.forEach((key) => {
		if (!linkedCategories.includes(key)) {
			leanCompanyData[key] = fullCompanyData.fields[key];
		}
	});

	leanCompanyData.logo = fullCompanyData.get('logo') && fullCompanyData.get('logo')[0].thumbnails.large.url;

	return leanCompanyData;
};

const getCrucialData = (fullData) => {
	const mainData = getDataWithoutLinkedCategories(fullData);
	const company = {
		id: fullData.getId(),
		...mainData

	};

	return company;
};

const getLinkedCategories = async (tableName, id) => {
	const { fields } = await base(tableName).find(id);
	delete fields.name;
	delete fields.company;
	return fields;
};

const getDetailedData = async (fullCompanyData) => {
	const companyDetails = getDataWithoutLinkedCategories(fullCompanyData);

	for (let i = 0; i < linkedCategories.length; i += 1) {
		const tableName = linkedCategories[i];
		const tableId = fullCompanyData.fields[tableName] && fullCompanyData.fields[tableName][0];

		if (tableId) {
			// eslint-disable-next-line no-await-in-loop
			const tableData = await getLinkedCategories(tableName, tableId);

			const tableNameCamel = camelcase(tableName);
			companyDetails[tableNameCamel] = tableData;
		}
	}

	return companyDetails;
};

module.exports = {
	getCrucialData,
	getDetailedData
};
