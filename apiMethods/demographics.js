const base = require('./base');

const getCompanyDemographics = async (id) => {
	// now get the actual data in here
	const { fields } = await base('Demographics').find(id);
	delete fields.name;
	delete fields.company;
	return fields;
};

module.exports = {
	getCompanyDemographics
};
