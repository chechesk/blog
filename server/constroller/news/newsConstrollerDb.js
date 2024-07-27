const News = require('../../Model/NewsModel');

const fetchNews = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  
  try {
    const totalArticles = await News.countDocuments({});
    const articles = await News.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.status(200).json({ articles, totalArticles });
  } catch (error) {
    console.error('Error fetching news from database:', error);
    res.status(500).json({ error: 'An error occurred while fetching news from the database.' });
  }
};

module.exports = { fetchNews };