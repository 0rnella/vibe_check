const { getAllCompanies, getOneCompany } = require('./companies');
const { getCompanyDemographics } = require('./demographics');
const { getCompanyLawsuits } = require('./lawsuits');

module.exports = {
	getAllCompanies,
	getOneCompany,
	getCompanyDemographics,
	getCompanyLawsuits
};
