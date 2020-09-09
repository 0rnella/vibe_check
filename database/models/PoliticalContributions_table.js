const { DataTypes } = require('sequelize');
const sequelizeDb = require('../database_setup');

const PoliticalContributions = sequelizeDb.define(
	'PoliticalContributions',
	{
		ownerContributions: {
			type: DataTypes.STRING,
			allowNull: true
		},

		companyContributions: {
			type: DataTypes.STRING,
			allowNull: true
		},

		thirdPartyContributions: {
			type: DataTypes.STRING,
			allowNull: true
		},

		matchingPolicy: {
			type: DataTypes.STRING,
			allowNull: true
		},

		divestments: {
			type: DataTypes.STRING,
			allowNull: true
		},

		adHockData: {
			type: DataTypes.STRING
		},

		sources: {
			type: DataTypes.STRING,
			allowNull: false
		}

	}
);

console.log(PoliticalContributions === sequelizeDb.models.PoliticalContributions);

module.exports = PoliticalContributions;
