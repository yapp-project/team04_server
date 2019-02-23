let mysql = require('mysql');
let private = require('../private');

const env = {
    development: {
        mysql: {
            host: private.mysql.host,
            user: private.mysql.user,
            password: private.mysql.password,
            port: private.mysql.port,
            database: private.mysql.database,
            logging: console.log
        }
    },
    test: {
        mysql: {
            host: private.mysql.host,
            user: private.mysql.user,
            password: private.mysql.password,
            port: private.mysql.port,
            database: private.mysql.database,
            logging: console.log
        }
    },

    production: {
        mysql: {
            host: private.mysql.host,
            user: private.mysql.user,
            password: private.mysql.password,
            port: private.mysql.port,
            database: private.mysql.database,
            logging: console.log
        }
    }
}

const nodeEnv = process.env.NODE_ENV || 'development';
// console.log(env[nodeEnv]);
module.exports = env[nodeEnv];