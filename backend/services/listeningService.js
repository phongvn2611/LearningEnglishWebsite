const ListeningModel = require('../models/listeningModel');

exports.createListen = async (listeningInfo) => {
  try {
   
    const newListen = await ListeningModel.create({...listeningInfo });

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
    
        return res;
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
       // var query = new RegExp( `^${topic}.*`,'gi');
        const list = await ListeningModel.find({Topic: topic}); 
        if(list.length == 0){
          return null;
        } 
      return list;
    } catch (error) {
      throw error;
    }
  };

  exports.getListenByLevel = async (level) => {
    try {
       // var query = new RegExp( `^${topic}.*`,'gi');
        const list = await ListeningModel.find({Level: level});
        if(list.length == 0){
          return null;
        }
      return list;
    } catch (error) {
      throw error;
    }
  };

  exports.getListenTopics = async () => {
    try {
        const list = await ListeningModel.distinct('Topic');
        if(list.length == 0){
          return null;
        }
      return list;
    } catch (error) {
      throw error;
    }
  };

exports.getDetailListen = async (_id = '') => {
  try {
    const res = await ListeningModel.findById(_id );
    
    return res;
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

exports.searchListen = async (name = '', level='') => {
  try {
    const list = await ListeningModel.find( { $or:[{'Name':name}, {'Topic':name}, {'Level':level} ]}); 
    if(list.length == 0){
      return null;
    }
    return list;
  } catch (error) {
    throw error;
  }
};