const jwt = require('jsonwebtoken');

const JWT_SECRET = '13245768';

const validateToken = (req, res) => {
    //req token from body
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);
      res.status(200).json({ message: 'Token is valid'});
    } catch (err) {
      res.status(400).json({ message: 'Token is invalid or expired' });
    }
  }

module.exports = {
    validateToken
}