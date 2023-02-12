const asyncHandler = require('express-async-handler');
const randomSchema = require('../schema/randomSchema');

const RandomSchema = require('../schema/randomSchema');

// @desc    Get Goals
// @route   GET /signup
// access   Public
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await RandomSchema.find();

  res.status(200).json(accounts);
});

// @desc    PUT Goals
// @route   POST /signup/:id
// access   Public
const createAccount = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error('Please add a text field');
  }

  const account = await RandomSchema.create({
    text: req.body.text,
  });

  res.status(200).json(account);
  // res.status(200).json({ message: `Accounts created id=${req.params.id}` });
});

// @desc    DELETE account
// @route   DELETE /:id
// access   Public
const deleteAccount = asyncHandler(async (req, res) => {
  const account = await randomSchema.findById(req.params.id);

  if (!account) {
    res.status(400);

    throw new Error('Account not found :(');
  }

  // const deletedAccount = await randomSchema.findByIdAndRemove(req.params.id);
  // PWEDENG DIRETSO NALANG
  await account.remove();
  res.status(200).json({ id: req.params.id });

  // res.status(200).json({ message: `Accounts deleted id=${req.params.id}` });
});

// @desc    UPDATE account
// @route   UPDATE /:id
// access   Public
const updateAccount = asyncHandler(async (req, res) => {
  const account = await randomSchema.findById(req.params.id);

  if (!account) {
    res.status(400);

    throw new Error('Account not found');
  }

  const updatedAccount = await RandomSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedAccount);
  // res.status(200).json({ message: `Accounts UPDATED id=${req.params.id}` });
});

// USED ASYNC FOR PROMISE
module.exports = {
  getAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
};
