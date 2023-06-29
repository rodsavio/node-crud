const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { initializeDatabaseConnection } = require('./infrastructure/database-connection');
const { routesConfiguration } = require('./infrastructure/routes-configuration');
const { setViewEngine } = require('./infrastructure/views-configuration');
const rootPath = require('./util/path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootPath, 'public')));

setViewEngine(app);
routesConfiguration(app);

initializeDatabaseConnection()
    .then(() => app.listen(3000));