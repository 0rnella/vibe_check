const Company = require('./Companies_table');
const Lawsuits = require('./Lawsuits_table');
const PoliticalContributions = require('./PoliticalContributions_table');
const LaborPractices = require('./LaborPractices_table');
const Demographics = require('./Demographics_table');

// This is where we export all the models, so they can be imported all together
module.exports = {
	Company,
	Lawsuits,
	PoliticalContributions,
	LaborPractices,
	Demographics
};
