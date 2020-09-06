const { DataTypes } = require('sequelize');
const sequelize = require('./database_setup');

const Company = sequelize.define(
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
		adHocData: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		// Other model options go here
	}
);

// `sequelize.define` also returns the model
console.log(Company === sequelize.models.Company); // true
