const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        } 
    }
})

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }},
    
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }},

    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }},

    status: {
        type: Sequelize.ENUM('open', 'closed'),
    }
})








module.exports = {
  User,
  Page
}