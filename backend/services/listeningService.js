const ListeningModel = require('../models/listeningModel');

exports.createListen = async (listeningInfo) => {
  try {
    const newListen = await ListeningModel.create({ ...listeningInfo });

    if (newListen) {
      return newListen;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateListen = async (_id='',listeningInfo) => {
    try{
    const listen= await ListeningModel.findByIdAndUpdate(_id, listeningInfo);
        if (listen) {
            return listen;
          }
          return null;
        } catch (error) {
          throw error;
        }
      };

exports.getListenById = async (_id) => {
    try {
        const res = await ListeningModel.findById(_id );
        if(res){
        return res;
        }
        return null;
      } catch (error) {
        throw error;
      }
    };


exports.getAllListen = async () => {
  try {
    const list = await ListeningModel.find({}); 
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getListenByTopic = async (topic) => {
    try {
        const list = await ListeningModel.find({topic: topic})
                  .select('-_id name video');  
      return list;
    } catch (error) {
      throw error;
    }
  };


  exports.getListenTopics = async () => {
    try {
        const list = await ListeningModel.distinct('topic');
      return list;
    } catch (error) {
      throw error;
    }
  };

exports.getDetailListen = async (_id = '') => {
  try {
    const res = await ListeningModel.findById(_id );
    if(res){
    return res;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.deleteListen = async (_id = '') => {
  try {
    const res = await ListeningModel.findByIdAndDelete(_id );
    if (res) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
