// const UserModel = require('../models/user.model');


// exports.getAllUsers = async () => {
//     try {
//       const list = await UserModel.find({});  
//       return list;
//     } catch (error) {
//       throw error;
//     }
//   };
  

// exports.isExistWordInFavorites = async (word, username) => {
//     try {
//       const regex = new RegExp(word, 'i');
//       const isExist = await UserModel.exists({
//         username,
//         favoriteList: {
//           $in: regex,
//         },
//       });
  
//       return isExist;
//     } catch (error) {
//       throw error;
//     }
//   };

//   exports.deleteFavoriteListOfUsers = async (word) => {
//     try {        
//         const { usersList = [] } = await UserModel.find({});  
//         for (let user of usersList) {
//             const isExist= await this.isExistWordInFavorites(word, user.username);
//             if(isExist) {
//                 const isDelete = await UserModel.updateOne({ username },
//                     { $pull: { favoriteList: { $in: word }}});
//                 if(!isDelete) return false;
//             }
//         }
//         return true;
//     } catch (error) {
//       throw error;
//     }
//   };