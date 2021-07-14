
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

module.exports = {
  "development": {
    "username": "flatbot",
    "password": "password",
    "database": "flatbot",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": POSTGRES_DB,
    "host": POSTGRES_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": POSTGRES_DB,
    "host": POSTGRES_HOST,
    "dialect": "postgres"
  }
};

