const News = require('../../Model/NewsModel');

const fetchNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    console.error('Error fetching news from database:', error);
    res.status(500).json({ error: 'An error occurred while fetching news from the database.' });
  }
};

module.exports = {fetchNews} ;