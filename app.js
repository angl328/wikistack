const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const { User, Page } = require('./models');



// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send(layout(''));
})

const syncAndRun = async () => {
  await User.sync();
  await Page.sync();
}

syncAndRun();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
