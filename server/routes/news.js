const express = require('express');
const  getNewsNet  = require('../constroller/news/newConstrollerApi');
const  { fetchNews }  = require('../constroller/news/newsConstrollerDb')

const router = express.Router();

/* GET users listing. */
router.get('/', getNewsNet);
router.get('/v1/news', fetchNews);

module.exports = router;
