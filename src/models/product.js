const Sequelize = require('sequelize');
const { sequelize } = require('../infrastructure/database-connection');

const Producta = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING
});

module.exports = Producta;