const wikiRouter = require('express').Router();

wikiRouter.get('/', (req, res) => {
    res.send('hello world');
});

wikiRouter.post('/', (req, res) => {

});

wikiRouter.get('/add', (req, res) => {
    res.send('hello world + add');
})



module.exports = wikiRouter;