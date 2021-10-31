const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');

 

//import file local
const { MAX } = require('./constant');
const corsConfig = require('./configs/cors.config');

const wordApi = require('./routers/word.router');
const listenApi = require('./routers/listening.router');
const quizApi = require('./routers/quiz.router');
const questionApi = require('./routers/question.router');
<<<<<<< Updated upstream
=======
const grammarApi = require('./routers/grammar.router');
const ipaApi = require('./routers/ipa.router');

//const accountApi = require('./routers/account.router');

>>>>>>> Stashed changes
//===================== Set up =======================
app.use(express.static(path.join(__dirname, '/build')));

// ================== Connect mongodb with mongoose ==================

mongoose.connect('mongodb+srv://phongvn:englishweb@cluster0.q0ion.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', function(err){
  if(err)
      console.log(err);
});

db.once('open', function(){
      console.log("Successfully.");
});
// ================== config ==================
app.use(express.json({ limit: MAX.SIZE_JSON_REQUEST }));
app.use(express.urlencoded({ limit: MAX.SIZE_JSON_REQUEST }));
app.use(cookieParser());
app.use(cors(corsConfig));

// ================== Apis ==================
const BASE_URL = '/api';
app.use(`${BASE_URL}/word`, wordApi);
app.use(`${BASE_URL}/listen`, listenApi);
app.use(`${BASE_URL}/quiz`, quizApi);
app.use(`${BASE_URL}/question`, questionApi);
<<<<<<< Updated upstream

=======
app.use(`${BASE_URL}/grammar`, grammarApi);
app.use(`${BASE_URL}/ipa`, ipaApi);
//app.use(`${BASE_URL}/user`, accountApi);
>>>>>>> Stashed changes


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

