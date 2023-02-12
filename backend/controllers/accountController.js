const asyncHandler = require('express-async-handler');

// @desc    Get Goals
// @route   GET /signup
// access   Public
const getAccounts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Accounts got got!' });
});

// @desc    PUT Goals
// @route   POST /signup/:id
// access   Public
const createAccount = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: `Accounts created id=${req.params.id}` });
});

// @desc    DELETE account
// @route   DELETE /:id
// access   Public
const deleteAccount = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Accounts deleted id=${req.params.id}` });
});

// USED ASYNC FOR PROMISE
module.exports = {
  getAccounts,
  createAccount,
  deleteAccount,
};
