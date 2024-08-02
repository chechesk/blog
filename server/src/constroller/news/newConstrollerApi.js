const axios = require('axios');
require('dotenv').config();
const { API_RAPID, API_URLRAPID, API_rapidapi } = process.env;
const News = require('../../Model/NewsModel');

const getNews = async (req, res) => {
  const options = {
    method: 'GET',
    url: API_URLRAPID,
    params: { language: 'ES' },
    headers: {
      'x-rapidapi-key': API_RAPID,
      'x-rapidapi-host': API_rapidapi
    }
  };

  try {
    const response = await axios.request(options);
    const newsArray = response.data.news.news;

    // Guardar las noticias en la base de datos
    for (const newsItem of newsArray) {
      try {
        const existingNews = await News.findOne({ link: newsItem.link });

        if (!existingNews) {
          const newNews = new News({
            title: newsItem.title,
            link: newsItem.link,
            description: newsItem.description,
            body: newsItem.body,
            source: newsItem.source,
            date: new Date(newsItem.date),
            language: newsItem.language,
            hostname: newsItem.hostname,
            image: {
              url: newsItem.props?.image,
              width: newsItem.props?.image_width,
              height: newsItem.props?.image_height,
              type: newsItem.props?.image_type,
            },
            created: new Date(newsItem.created_at),
          });

          await newNews.save();
        }
      } catch (error) {
        console.error(`Error saving item: ${newsItem.link}`, error);
      }
    }

    res.status(response.status).json({ success: true, message: 'News fetched and saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching and saving news.' });
  }
};

module.exports = getNews;