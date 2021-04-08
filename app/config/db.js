const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'csv',
  password: 'password',
  port: 5432,
})
pool.connect();