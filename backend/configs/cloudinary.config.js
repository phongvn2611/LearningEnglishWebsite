require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: 'phongvn2611',
  api_key: '751982438141733',
  api_secret: 'NyTs02lpK10oUja4uGPcC1HH7JA',
});

module.exports = { cloudinary };
