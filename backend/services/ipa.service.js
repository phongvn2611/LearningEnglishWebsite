const IPAModel = require('../models/ipa.model');

exports.createIPA = async (ipaInfo ) => {
  try {
    const newIPA = await IPAModel.create({ ...ipaInfo});

    if (newIPA) {
      return newIPA;
    }
    return null;
  } catch (error) {
    throw error;
  }
};


exports.getIPAById = async (id = '') => {
    try {
      const res = await IPAModel.findById(id);   
      return res;
    } catch (error) {
      throw error;
    }
  };


  exports.getIPAByListenId = async (listenId = '') => {
    try {
      const res = await IPAModel.find({ListeningId: listenId}).populate('listeningId');  
      return res;
    } catch (error) {
      throw error;
    }
  };

 //delete by id
 exports.deleteIPAById = async (id = '') => {
    try {
      const res = await IPAModel.findByIdAndDelete(id );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  
   //delete by listenid
   exports.deleteIPAByListenId = async (listenId = '') => {
      try {
        const res = await IPAModel.deleteOne({ListeningId: listenId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
