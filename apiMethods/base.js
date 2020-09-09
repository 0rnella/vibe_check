const Airtable = require('airtable');
require('dotenv').config();

const apiKey = process.env.AIRTABLE_KEY;
const base = new Airtable({ apiKey }).base('appS12AiYFbn3vSDy');

module.exports = base;
