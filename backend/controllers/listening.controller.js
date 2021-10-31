const {
    getAllListen,
    createListen,
    updateListen,
    deleteListen,
    getDetailListen,
    getListenByTopic,
    getListenByIPA,
    getListenTopics
  } = require('../services/listening.service');

  const {
    uploadVideo,
  } = require('../services/common.service');

  
  //create Listening
  exports.postListening = async (req, res) => {
    try {
      const {name, topic, description, script, video } = req.body;
      const creatDate= new Date(new Date().toUTCString()); 

      // upload video
      let videoUrl = null;
      if (video) {
        videoUrl = await uploadVideo(video, 'dynonary/words');
      }
  
      // create the new listen
      const newListen = await createListen({name, topic, description, script, video: videoUrl, creatDate });
  
      if (newListen !=null) {
        return res.status(200).json({data: newListen });
      }
      return res.status(503).json({ message: 'Error, can not create listening.' });
    } catch (error) {
      console.error('POST CONTRIBUTE WORD ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not create litening.' });
    }
  };

  //update 
  exports.putListen = async (req, res, next) => {
    try {
        const {name, topic, description, video, script } = req.body;
  
        // upload video
        let videoUrl = null;
        if (video) {
          videoUrl = await uploadVideo(video, 'dynonary/words');
        }
  
      // update
      const Listen = await updateListen(req.params.listenId, 
        {name, topic, description, script, video: videoUrl });
  
        if (Listen !=null) {
            return res.status(200).json({updateListen });
          }
      return res.status(400).json({ message: 'Error, can not update word.' });
    } catch (error) {
      console.error('POST CONTRIBUTE WORD ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not update word.' });
    }
  };

  //get the details
  exports.getDetails = async (req, res, next) => {
    try {
      const listenDetail = await getDetailListen(req.params.listenId);
      if (listenDetail) {
        return res.status(200).json(listenDetail);
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: error });
    }
  };


  //get by topic
  exports.getByTopic = async (req, res) => {
    try {
      const topic = req.params.topic;  
      const list = await getListenByTopic(topic);
      return res.status(200).json({list });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'ERROR, can not get listening' });
    }
  };

  //get by IPA Id
  exports.getByIPA = async (req, res) => {
    try {
      const ipaId = req.params.ipaId;  
      const Listen = await getListenByIPA(ipaId);
      
      if(Listen != null){
      return res.status(200).json({Listen });
      }
      return res.status(204).json({ message: 'No content.' });

    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'ERROR, can not get listening' });
    }
  };

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
      const list = await searchWord(req.query.name);
      return res.status(200).json({ list });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'No result.' });
    }
  };
  
  