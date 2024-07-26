const axios = require('axios');
const News = require('../../Model/NewsModel');

const getNews = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://google-news-api1.p.rapidapi.com/search',
    params: { language: 'ES' },
    headers: {
      'x-rapidapi-key': 'c1b6adfde4mshddbb7a8cc282ba5p1b9e20jsn3e934cabecc7',
      'x-rapidapi-host': 'google-news-api1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const newsArray = response.data.news.news;

    // Guardar las noticias en la base de datos
    for (const newsItem of newsArray) {
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

    res.status(response.status).json({ success: true, message: 'News fetched and saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching and saving news.' });
  }
};

module.exports =  getNews ;