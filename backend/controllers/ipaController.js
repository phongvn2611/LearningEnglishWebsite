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

  
  //create ipa
  exports.postIPA = async (req, res) => {
    try {

      const {AudioSrc, MouthShape, Desc, Examples, Phonetic, ListeningId} = req.body;
      // create IPA
      const newIPA = await createIPA({AudioSrc, MouthShape, Desc, Examples, Phonetic, ListeningId});
  
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
      const {AudioSrc, MouthShape, Desc, Examples, Phonetic} = req.body;
      const ListeningId = IPAExist.ListeningId;
      const IPA = await updateIPA({AudioSrc, MouthShape, Desc, Examples, Phonetic, ListeningId});
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

  
  