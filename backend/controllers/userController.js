import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // send json as objcet
  //res.send({ email, password });

  // find user by email
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(404);
    throw new Error('Invalid email or password');
  }
});



const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

export { authUser };
