const wikiRouter = require('express').Router();
const addPage = require('../views/addPage');

wikiRouter.get('/', (req, res) => {
    res.send('hello world');
});

wikiRouter.post('/', (req, res) => {

});

wikiRouter.get('/add', (req, res) => {
    res.send(addPage());
})



module.exports = wikiRouter;