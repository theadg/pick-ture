const { create } = require('domain');
const express = require('express');
const router = express.Router();
const {
  getAccounts,
  createAccount,
  deleteAccount,
} = require('../controllers/accountController');

// read
router.get('/', getAccounts);

// create
router.post('/:id', createAccount);
// delete
router.delete('/:id', deleteAccount);

module.exports = router;
