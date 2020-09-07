const { DataTypes } = require('sequelize');
const sequelizeDb = require('../database_setup');

const Company = sequelizeDb.define(
	'Company',
	{
		// Model attributes are defined here
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		industry: {
			type: DataTypes.STRING,
			allowNull: false
		},
		logo: {
			type: DataTypes.STRING,
			isUrl: true
		},
		website: {
			type: DataTypes.STRING,
			isUrl: true
		},
		yearFounded: {
			type: DataTypes.NUMBER
		},
		currentCEO: {
			type: DataTypes.STRING
		},
		annualNetRevenue: {
			type: DataTypes.NUMBER
		},
		adHocData: {
			type: DataTypes.STRING
		},
		sources: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		// Other model options go here
	}
);

// `sequelize.define` also returns the model
console.log(Company === sequelizeDb.models.Company); // true

module.exports = Company;
