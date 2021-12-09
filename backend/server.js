require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const BASE_URL = '/api'
app.use(`${BASE_URL}/user`, require('./routes/userRouter'));
app.use(`${BASE_URL}/grammar`, require('./routes/grammarRouter'));
app.use(`${BASE_URL}/ipa`, require('./routes/ipaRouter'));
app.use(`${BASE_URL}/listening`, require('./routes/listeningRouter'));
app.use(`${BASE_URL}/question`, require('./routes/questionRouter'));
app.use(`${BASE_URL}/quiz`, require('./routes/quizRouter'));
app.use(`${BASE_URL}/word`, require('./routes/wordRouter'));
app.use(`${BASE_URL}/common`, require('./routes/commonRouter'));

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
