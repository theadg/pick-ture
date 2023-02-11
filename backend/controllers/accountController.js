// @desc    Get Goals
// @route   GET /signup
// access   Public
const getAccounts = (req, res) => {
  res.status(200).json({ message: 'Accounts got got!' });
};

// @desc    PUT Goals
// @route   POST /signup
// access   Public
const createAccount = (req, res) => {
  res.status(200).json({ message: `Accounts created id=${req.params.id}` });
};

// @desc    PUT Goals
// @route   POST /signup
// access   Public
const deleteAccount = (req, res) => {
  res.status(200).json({ message: `Accounts deleted id=${req.params.id}` });
};

module.exports = {
  getAccounts,
  createAccount,
  deleteAccount,
};
