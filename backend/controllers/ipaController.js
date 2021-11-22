const {
    createIPA,
    updateIPA,
    getAllIPAs,
    getIPAById,
    deleteIPAById,
    deleteIPAByListenId,
  } = require('../services/ipaService');
  const {
    getListenById,
    updateListen,
  } = require('../services/listeningService');
  const {
    uploadVideo,
    uploadImage,
  } = require('../services/commonService');
  
  
  //create ipa
  exports.postIPA = async (req, res) => {
    try {

      const {Audio, MouthShape, Desc, Examples, Phonetic, Video, Image} = req.body;

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
         videoUrl = await uploadVideo(Video, 'dynonary/ipas');
       }
     }

    //upload Image
    let imgUrl = null;
    if (Image) {      
        imgUrl = await uploadImage(Image, 'dynonary/ipas');
    }

    //upload Audio
    let audUrl = null;
    if (Audio) {      
        audUrl = await uploadVideo(Audio, 'dynonary/ipas');
    }

    // create IPA
    const ipa = await createIPA({Audio: audUrl, MouthShape, Desc, Examples, Phonetic, Video: videoUrl, Image: imgUrl});
  
    if (ipa != null) {
        return res.status(201).json({ipa});
      }
      return res.status(503).json({ message: 'Error, can not create IPA.' });
    } catch (error) {
      console.error('POST ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not create IPA.' });
    }
  };

  //update IPA
  exports.putIPA = async (req, res) => {
    try {

        //check if IPA existed
      const ipaId = req.params.id;
      const IPAExist = await getIPAById(ipaId);

      if(!IPAExist) {
        return res.status(400).json({ message: 'Error, Not found IPA.' });
      }

      const {Audio, MouthShape, Desc, Examples, Phonetic, Video, Image} = req.body;
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
         videoUrl = await uploadVideo(Video, 'dynonary/ipas');
       }
     }

    //upload Image
    let imgUrl = null;
    if (Image) {      
        imgUrl = await uploadImage(Image, 'dynonary/ipas');
    }

    //upload Audio
    let audUrl = null;
    if (Audio) {      
        audUrl = await uploadVideo(Audio, 'dynonary/ipas');
    }

    const ipa = await updateIPA({Audio: audUrl, MouthShape, Desc, Examples, Phonetic, Video: videoUrl, Image: imgUrl});
    if (ipa) {
        return res.status(202).json({ipa });
      }
      return res.status(503).json({ message: 'Error, can not update IPA.' });return res.status(503).json({ message: 'Error, can not update question.' });
    } catch (error) {
      console.error('PUT ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not update IPA.' });
    }
  };


  //get IPA by id
  exports.getById = async (req, res) => {
    try {
      const ipa = await getIPAById(req.params.id);
      if (ipa) {
        return res.status(200).json(ipa);
      }
    } catch (error) {
      console.error('GET DETAILS ERROR: ', error);
      return res.status(503).json({ message: error });
    }
  };


  //delete by id
  exports.deleteById = async (req, res) => {
    try {
      const { id } = req.params.id;
      const isDelete = await deleteIPAById(id);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this IPA' });
    }
  };

  //get all
 exports.getAllIPAs = async (req, res) => {
  try {
    const ipas = await getAllIPAs();
    return res.status(200).json({ipas });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

  
  