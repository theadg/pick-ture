const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');
const User = require('../schema/userSchema');

// @desc    Get Goals
// @route   GET /signup
// access   Public
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await User.find();

  res.status(200).json(accounts);
});

// @desc    Register new User
// @route   POST /user/signup
// access   Public
const createAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // res.status(200).json({ message: `Accounts created id=${req.params.id}` });
});

// @desc    Authenticate a user
// @route   POST /user/login
// access   Public
const logInAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
  // const password = await User.findOne({ email });

  // res.json({ message: 'Login User' });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Get user data
// @route   GET /users/me
// access   Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// USED ASYNC FOR PROMISE
module.exports = {
  getAccounts,
  createAccount,
  getMe,
  logInAccount,
};
