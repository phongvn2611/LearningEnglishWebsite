const {
  getAllListen,
  createListen,
  updateListen,
  deleteListen,
  getDetailListen,
  getListenByTopic,
  getListenTopics,
  searchListen,
  getListenByLevel
} = require('../services/listeningService');

const {
  uploadVideo,
  uploadImage,
} = require('../services/commonService');


//create Listening
exports.postListening = async (req, res) => {
  try {
    const {Name, Topic, Description, Script, Video, Image } = req.body;
    const CreatDate= new Date(new Date().toUTCString()); 

    //upload Video
    let videoUrl = null;
      if (Video) {
        if(typeof Video === 'string') {
          let vid = Video.trim();
          if(vid){
            const videoId = vid.split("=");
            videoUrl= `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
          }
        }
        else{
          videoUrl = await uploadVideo(Video, 'dynonary/litenings');
        }
      }

      //upload Image
      let imgUrl = null;
      if (Image) {      
          imgUrl = await uploadImage(Image, 'dynonary/listenings');
      }

    // create the new listen
    const newListen = await createListen({Name, Topic, Description, Script, Video: videoUrl, Image: imgUrl, CreatDate });

    if (newListen !=null) {
      return res.status(200).json({data: newListen });
    }
    return res.status(503).json({ message: 'Error, can not create listening.' });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not create litening.' });
  }
};

//update 
exports.putListen = async (req, res, next) => {
  try {
      const {Name, Topic, Description, Script, Video, Image }= req.body;

       //video
    let videoUrl = null;
    if (Video) {
      if(typeof Video === 'string') {
        let vid = Video.trim();
        if(vid){
          const videoId = vid.split("=");
          videoUrl= `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        }
      }
      else{
        videoUrl = await uploadVideo(Video, 'dynonary/listenings');
      }
    }

     //upload Image
     let imgUrl = null;
     if (Image) {      
         imgUrl = await uploadImage(Image, 'dynonary/listenings');
     }

    // update
    const Listen = await updateListen(req.params.listenId, 
      {Name, Topic, Description, Script, Video: videoUrl, Image: imgUrl });

      if (Listen !=null) {
          return res.status(200).json({updateListen });
        }
    return res.status(400).json({ message: 'Error, can not update listening.' });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not update listening.' });
  }
};

//get the details
exports.getDetails = async (req, res, next) => {
  try {
    console.log(req.params.listenId);
    const listenDetail = await getDetailListen(req.params.listenId);
    if (listenDetail) {
      return res.status(200).json({listenDetail});
    }
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: error });
  }
};

//get by topic
exports.getByTopic = async (req, res) => {
  try {
    const Topic = req.params.topic;  
    const list = await getListenByTopic(Topic);
    if(list == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'ERROR, can not get listening' });
  }
};

// //get by level
// exports.getByLevel = async (req, res) => {
//   try {
//     const Level = req.params.level;  
//     const list = await getListenByLevel(Level);
//     if(list == null ){
//       return res.status(204).json({ message: 'No result.'});
//       }
//     return res.status(200).json({list });
//   } catch (error) {
//     console.error('ERROR: ', error);
//     return res.status(503).json({ message: 'ERROR, can not get listening' });
//   }
// };


//get all
exports.getAll = async (req, res) => {
  try { 
    const list = await getAllListen();
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get topics
exports.getTopics = async (req, res) => {
  try {
    const list = await getListenTopics();
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//delete
exports.deleteListen = async (req, res) => {
  try {
    const { listenId } = req.params.listenId;
    const isDeleteWord = await deleteListen(listenId);
    if (isDeleteWord) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
  } catch (error) {
    console.error('GET WORD DETAILS ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this listening' });
  }
};

 //search
 exports.getSearchListen = async (req, res) => {
  try {
    const name =req.query.name;
    const level =req.params.level;
    const list = await searchListen(name, level );
    if(list == null ){
    return res.status(204).json({ message: 'No result.'});
    }
    return res.status(200).json({ list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'ERROR.' });
  }
};

