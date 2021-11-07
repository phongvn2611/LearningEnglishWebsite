const {
  updateTop,
  getLeaderboardWithName,
} = require('../services/hightscore.service');

exports.putUpdateHighScore = async (req, res, next) => {
  try {
    const { Name, Score } = req.body;
    const { AccountId } = req.user;
    if (!AccountId) {
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }

    await updateTop(AccountId, Name, Score);
  } catch (error) {
    console.error('PUT UPDATE HIGHT SCORE ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getLeaderboard = async (req, res, next) => {
  try {
    const { Name } = req.query;
    if (!Boolean(Name)) {
      return res.status(400).json({ message: 'failed' });
    }

    const list = await getLeaderboardWithName(Name);

    return res.status(200).json({ list });
  } catch (error) {
    console.error('GET LEADERBOARD ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
