const jwt = require('jsonwebtoken');

const JWT_SECRET = '13245768';

const generateToken = (req, res) => {
    //request email from body
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  
    
    res.status(200).json({ token });
  }

module.exports = {
    generateToken,
}