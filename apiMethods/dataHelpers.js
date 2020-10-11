const camelcase = require('lodash.camelcase');
const base = require('./base');

const linkedCategories = ['Demographics', 'Lawsuits', 'Labor Practices', 'Political Contributions', 'Effect on Ecosystem'];

// copy full data without including the linked categories
const getDataWithoutLinkedCategories = (fullCompanyData) => {
	const leanCompanyData = {};
	const companyKeys = Object.keys(fullCompanyData.fields);

	// copy full data without including the linked categories
	companyKeys.forEach((key) => {
		if (!linkedCategories.includes(key)) {
			leanCompanyData[key] = fullCompanyData.fields[key];
		}
	});

	// add the logo
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

const getLinkedRecord = async (tableName, id) => {
	const { fields } = await base(tableName).find(id);
	delete fields.name;
	delete fields.company;
	return fields;
};

const getDetailedData = async (fullCompanyData) => {
	const companyDetails = getDataWithoutLinkedCategories(fullCompanyData);

	for (let i = 0; i < linkedCategories.length; i += 1) {
		const tableName = linkedCategories[i];
		const tableNameCamel = camelcase(tableName);

		const linkedRecordIds = fullCompanyData.fields[tableName];

		if (linkedRecordIds) {
			const linkedRecords = [];
			// get all data for all linked record ids
			for (let j = 0; j < linkedRecordIds.length; j += 1) {
				const linkedRecordId = linkedRecordIds[j];
				// eslint-disable-next-line no-await-in-loop
				const linkedRecordData = await getLinkedRecord(tableName, linkedRecordId);
				linkedRecords.push(linkedRecordData);
			}

			// if there are multiple records, return the array
			// otherwise return the first record
			if (linkedRecords.length >= 2) {
				companyDetails[tableNameCamel] = linkedRecords;
			} else {
				const singleRecord = linkedRecords[0];
				companyDetails[tableNameCamel] = singleRecord;
			}
		}
	}

	return companyDetails;
};

module.exports = {
	getCrucialData,
	getDetailedData
};
