const { create } = require('domain');
const express = require('express');
const router = express.Router();
const {
  getAccounts,
  createAccount,
  getMe,
  logInAccount,
} = require('../controllers/accountController');
const { protect } = require('../middleware/authMiddleware');
// get accounts
router.get('/list', getAccounts);

// create an account
router.post('/signup', createAccount);
// log in account
router.post('/login', logInAccount);

//
router.get('/me', protect, getMe);

module.exports = router;
