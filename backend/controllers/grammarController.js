const {
  createGrammar,
  getAllGrammars,
  getGrammarById,
  deleteGrammarById,
  deleteGrammarByListenId,
  getGrammarLevels,
  getGrammarByLevel
} = require('../services/grammarService');
const {
  getListenById,
  updateListen,
} = require('../services/listeningService');
const {
  uploadVideo,
  uploadImage,
} = require('../services/commonService');


//create grammar
exports.postGrammar = async (req, res) => {
  try {
    const {Title, Video, Image, Script, Content, Level, Items}= req.body;

     //video
     let videoUrl = null;
     if (Video) {
      if(typeof Video === 'string') {
        let vid = Video.trim();
        if(vid){
          let videoId = null;
          if(Video.includes("=")){
            videoId = vid.split("=");
          }
          else
          {
            videoId = vid.split("youtu.be/");
          }
          videoUrl= `https://www.youtube.com/embed/${videoId[1]}?enablejsapi=1`;
        }
      }
       else{
         videoUrl = await uploadVideo(Video, 'dynonary/grammars');
       }
     }

    //upload Image
    let imgUrl = null;
    if (Image) {      
        imgUrl = await uploadImage(Image, 'dynonary/grammars');
    }

    const grammar = await createGrammar({Title, Video: videoUrl, Image: imgUrl, Script, Content,Level, Items});
    if (grammar) {
      return res.status(201).json({grammar });
    }
    return res.status(503).json({ message: 'Error, can not create gramma.' });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not create gramma.' });
  }
};

//update grammar
exports.putGrammar = async (req, res) => {
  try {

      //check if grammar existed
    const grammarId = req.params.id;
    const GrammarExist = await getGrammarById(grammarId);

    if(!GrammarExist) {
      return res.status(400).json({ message: 'Error, Not found grammar.' });
    }
      // delete grammar
    const isDeleted = await deleteGrammarById(grammarId);
    if(!isDeleted){
      return res.status(400).json({ message: 'Error, can not update grammar.' });
    }

    // create grammar
    const {Title, Video, Image, Script, Content,Level, Items} = req.body;
    //video
    let videoUrl = null;
    if (Video) {
      if(typeof Video === 'string') {
        let vid = Video.trim();
        if(vid){
          let videoId = null;
          if(Video.includes("=")){
            videoId = vid.split("=");
          }
          else
          {
            videoId = vid.split("youtu.be/");
          }
          videoUrl= `https://www.youtube.com/embed/${videoId[1]}?enablejsapi=1`;
        }
      }
      else{
        videoUrl = await uploadVideo(Video, 'dynonary/grammars');
      }
    }

    //upload Image
    let imgUrl = null;
    if (Image) {      
        imgUrl = await uploadImage(Image, 'dynonary/grammars');
    }

    const grammar = await createGrammar({Title, Video: videoUrl, Image: imgUrl, Script, Content,Level, Items});

    if (grammar) {
      return res.status(201).json({grammar });
    }
    return res.status(503).json({ message: 'Error, can not update grammar.' });return res.status(503).json({ message: 'Error, can not update question.' });
  } catch (error) {
    console.error('PUT ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not update grammar.' });
  }
};


//get grammar by id
exports.getById = async (req, res) => {
  try {
    const grammar = await getGrammarById(req.params.id);
    if (grammar) {
      return res.status(200).json(grammar);
    }
  } catch (error) {
    console.error('GET DETAILS ERROR: ', error);
    return res.status(503).json({ message: error });
  }
};

//get levels
exports.getLevels = async (req, res) => {
  try {
    const levels = await getGrammarLevels();
    if(levels == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({levels });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get by level
exports.getByLevel = async (req, res) => {
  try {
    const Level = req.params.level;  
    const grammars = await getGrammarByLevel(Level);
    if(grammars == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({grammars });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'ERROR, can not get grammar' });
  }
};


//delete by id
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const isDelete = await deleteGrammarById(id);
    if (isDelete) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
    return res.status(400).json({ message: 'Eror, can not delete this grammar' });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this grammar' });
  }
};

//get all 
exports.getAllGrammars = async (req, res) => {
  try {
    const grammars = await getAllGrammars();
    return res.status(200).json({grammars });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};


