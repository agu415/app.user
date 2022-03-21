require ("dotenv").config();

const {DB_HOST, DB_USER, DB_PASS, DB_NAME} = process.env;

module.exports = {
    "production": {
        "username": DB_USER,
        "password": DB_PASS,
        "database": DB_NAME,
        "host": DB_HOST,
        "dialect": "mysql",
        

    },
    "development": {
        "username": "",
        "password": "",
        "database": "agustinmebar",
        "host": "127.0.0.1",
        "dialect": "postgres",
        
        
      
    }
}