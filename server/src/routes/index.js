var express = require('express');
var router = express.Router();
const newsRouter = require('./news')
const userRouter = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/news', newsRouter)
router.use('/users', userRouter);

module.exports = router;
