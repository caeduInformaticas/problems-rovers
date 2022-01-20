const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  DB: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  },
  SERVER: {
    PORT: process.env.PORT,
  },
};
