const Sequelize = require('sequelize');
const Tedious = require('tedious');

const { dbConfig, dbLogging, dbName } = require('../appSettings.json');

const initializeDatabaseConnection = async () => {
    try {
        await checkDatabaseExistence();
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const sequelize = new Sequelize(
    dbName, 
    dbConfig.authentication.options.userName, 
    dbConfig.authentication.options.password, 
    {
        logging: dbLogging,
        dialect: 'mssql',
        host: dbConfig.server,
        dialectOptions: {
            options: {
                trustServerCertificate: dbConfig.options.trustServerCertificate,
                requestTimeout: dbConfig.options.requestTimeout
            }
        }
    }
);

const checkDatabaseExistence = async () => {
    return new Promise((resolve, reject) => {
        const connection = new Tedious.Connection(dbConfig);
        connection.connect((err) => {
            if (err) {
                console.error(err);
                reject(`Connection Failed: ${err.message}`);
            }

            const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
            const request = new Tedious.Request(createDbQuery, (err) => {
                if (err) {
                    console.error(err);
                    reject(`Create DB Query Failed: ${err.message}`);
                }

                // query executed successfully
                resolve();
            });

            connection.execSql(request);
        });
    });
}

exports.sequelize = sequelize;
exports.initializeDatabaseConnection = initializeDatabaseConnection;