const { DataTypes } = require('sequelize');
const sequelizeDb = require('../database_setup');

const Demographics = sequelizeDb.define(
	'Demographics',
	{
		white: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		black: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		native: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		latinx: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		asian: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		otherMixedRace: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		women: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		men: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		otherGender: {
			type: DataTypes.NUMBER,
			allowNull: true
		},

		sources: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}

);

console.log(Demographics === sequelizeDb.models.Demographics);

module.exports = Demographics;
