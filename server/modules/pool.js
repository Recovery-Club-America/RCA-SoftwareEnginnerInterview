const pg = require('pg');
let pool;


if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else if (process.env.DATABASE_LOCAL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_LOCAL,
  });
}

else {
  pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'rca-login-project', 
  });
}

module.exports = pool;
