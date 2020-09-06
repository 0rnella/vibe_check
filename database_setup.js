// const pgtools = require('pgtools');
const { Sequelize } = require('sequelize');

// If you haven't yet created a vibecheck database, uncomment and run the code below.
// const config = {
//   user: 'postgres',
//   host: 'localhost',
//   password: '1234',
//   port: 5432
// };
// pgtools.createdb(config, 'vibecheck', (err, res) => {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });

const sequelize = new Sequelize('vibecheck', 'postgres', '1234', {
	host: 'localhost',
	dialect: 'postgres'
});

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

testConnection();

module.exports = sequelize;
