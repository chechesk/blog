const express = require('express');
const  getNewsNet  = require('../constroller/news/newConstrollerApi');
const  { fetchNews }  = require('../constroller/news/newsConstrollerDb');
const { fetchNewsById } = require('../constroller/news/newsConstrollerById');

const router = express.Router();

/* GET users listing. */
router.get('/', getNewsNet);
router.get('/v1/news', fetchNews);
router.get('/v1/news/:id', fetchNewsById);

module.exports = router;
