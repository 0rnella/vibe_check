const pgtools = require('pgtools');

// If you haven't yet created a vibecheck database, run the code below.
const config = {
	user: 'postgres',
	host: 'localhost',
	password: '1234',
	port: 5432
};
pgtools.createdb(config, 'vibecheck', (err, res) => {
	if (err) {
		console.error(err);
		process.exit(-1);
	}
	console.log(res);
});
