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
           const videoId = vid.split("=");
           videoUrl= `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
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
    const newIPA = await createIPA({Audio: audUrl, MouthShape, Desc, Examples, Phonetic, Video: videoUrl, Image: imgUrl});
  
    if (newIPA != null) {
        return res.status(201).json({data: newIPA });
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
      const ipaId = req.params.ipaId;
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
           const videoId = vid.split("=");
           videoUrl= `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
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

    const IPA = await updateIPA({Audio: audUrl, MouthShape, Desc, Examples, Phonetic, Video: videoUrl, Image: imgUrl});
    if (IPA) {
        return res.status(202).json({data: IPA });
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
      const ipaDetail = await getIPAById(req.params.id);
      if (ipaDetail) {
        return res.status(200).json(ipaDetail);
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
    const list = await getAllIPAs();
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

  
  