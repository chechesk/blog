const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
  body: { type: String },
  source: { type: String, required: true },
  date: { type: Date, required: true },
  language: { type: String, required: true },
  hostname: { type: String, required: true },
  image: {
    url: { type: String },
    width: { type: Number },
    height: { type: Number },
    type: { type: String },
  },
  created_at: { type: Date, default: Date.now },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;