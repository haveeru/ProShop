import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    passord: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Free User',
    email: 'free@gmail.com',
    passord: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Guest User',
    email: 'guest@gmail.com',
    passord: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'shane toe',
    email: 'shane@gmail.com',
    passord: bcrypt.hashSync('123456', 10),
  },
];

export default users;
