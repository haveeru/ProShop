import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // Eg: 60, "2 days", "10h", "7d", "120" = "120ms"
    expiresIn: '3h',
  });
};

export default generateToken;