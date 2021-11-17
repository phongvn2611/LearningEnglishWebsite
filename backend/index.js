require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const https = require('https');
const corsConfig = require('./configs/corsConfig');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));
const BASE_URL = '/api'
app.use(`${BASE_URL}/user`, require('./routes/userRouter'));
// app.use('/grammar', require('./routes/grammarRouter'));

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log("Connected to mongodb");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
