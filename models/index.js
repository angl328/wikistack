const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
})

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
       },
    
    slug: {
        type: Sequelize.STRING,
        transform: function generateSlug (title) {
            return title.replace(/\s+/g, '_').replace(/\W/g, '');
          }
    },


    content: {
        type: Sequelize.TEXT,
       },

    status: {
        type: Sequelize.ENUM('open', 'closed'),
    }
})








module.exports = {
  db,
  User,
  Page
}