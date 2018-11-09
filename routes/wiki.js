const wikiRouter = require('express').Router();
const addPage = require('../views/addPage');

wikiRouter.get('/', (req, res) => {
    res.send('hello world');
});

wikiRouter.post('/', (req, res) => {
    res.json(req.body);
});

wikiRouter.get('/add', (req, res) => {
    res.send(addPage());
})

const { Page } = require("../models");

wikiRouter.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = wikiRouter;
