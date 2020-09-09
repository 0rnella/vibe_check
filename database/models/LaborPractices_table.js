const { DataTypes } = require('sequelize');
const sequelizeDb = require('../database_setup');

const LaborPractices = sequelizeDb.define(
	'LaborPractices',
	{
		wageRatio: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		outSourcedWork: {
			type: DataTypes.STRING,
			allowNull: true
		},

		inclusiveHealthCare: {
			type: DataTypes.STRING,
			allowNull: true
		},

		inclusiveParentalLeave: {
			type: DataTypes.STRING,
			allowNull: true
		},

		tuitionAssistance: {
			type: DataTypes.STRING,
			allowNull: true
		},

		unionizedWorkers: {
			type: DataTypes.STRING,
			allowNull: true
		},

		unethicalLaborInProductionChain: {
			type: DataTypes.STRING,
			allowNull: true
		},

		holidayPolicy: {
			type: DataTypes.STRING,
			allowNull: true
		},

		sources: {
			type: DataTypes.STRING,
			allowNull: false
		}

	}
);

console.log(LaborPractices === sequelizeDb.models.LaborPractices);

module.exports = LaborPractices;
