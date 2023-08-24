const jwt_decode = require('jwt-decode');

export const getIDfromToken = (req: { body: { token: string; }; }) => {
  const token = req.body.token;
  return jwt_decode(token).id; 
};
