const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user')

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

const syncAndRun = async () => {
  await User.sync();
  await Page.sync();
  await db.sync();

  const PORT = 3000;

  app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}

syncAndRun();


