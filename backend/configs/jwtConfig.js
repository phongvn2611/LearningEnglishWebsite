const jwt = require('jsonwebtoken');
const encodedToken = async (secretKey, user, expire = 7 * 24 * 3600 * 1000) => {
  return await jwt.sign(
    {
      iss: 'EnglishWebsite',
      sub: user,
    },
    secretKey,
    { expiresIn: expire },
  );
};

module.exports = {
  encodedToken,
};
