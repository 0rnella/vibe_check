const base = require('./base');

const getCompanyLawsuits = async (id) => {
	const { fields } = await base('Lawsuits').find(id);
	delete fields.name;
	delete fields.company;

	return fields;
};

module.exports = {
	getCompanyLawsuits
};
