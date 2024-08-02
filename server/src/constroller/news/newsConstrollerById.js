const News = require('../../Model/NewsModel');

const fetchNewsById = async (req, res) => {
  const { id } = req.params; // Asegúrate de desestructurar el parámetro id

  try {
    const article = await News.findById(id);
    
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching news from database:', error);
    res.status(500).json({ error: 'An error occurred while fetching news from the database.' });
  }
};

module.exports = { fetchNewsById };