// here we are taking Datatypes from sequelize package
const { DataTypes } = require('sequelize');
// grabbing sequelizeDB from database_setup file
const sequelizeDb = require('../database_setup');

const Lawsuits = sequelizeDb.define(
	'Lawsuits',
	{
		lawsuitsPerYear: {
			type: DataTypes.NUM,
			allowNull: true
		},
		settlementsPerYear: {
			type: DataTypes.NUM,
			// if you dont leave allowNull to false it will
			// default to true
			allowNull: true
		},

		amountSettlementPerYear: {
			type: DataTypes.NUM,
			allowNull: true
		},

		civilLawsuitsPerYear: {
			type: DataTypes.NUM,
			allowNull: true
		},

		sources: {
			type: DataTypes.STRING,
			allowNull: false
		}

	}
);

console.log(Lawsuits === sequelizeDb.models.Lawsuits);

module.exports = Lawsuits;
