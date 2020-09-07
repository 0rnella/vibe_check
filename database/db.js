const { Sequelize } = require('sequelize');

const sequelizeDb = new Sequelize('vibecheck', 'postgres', '1234', {
	dialect: 'postgres',
	host: 'localhost'
});

const testConnection = async () => {
	try {
		await sequelizeDb.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

testConnection();

module.exports = sequelizeDb;
