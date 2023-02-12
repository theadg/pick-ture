const { create } = require('domain');
const express = require('express');
const router = express.Router();
const {
  getAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
} = require('../controllers/accountController');

// read
router.get('/', getAccounts);

// create
router.post('/', createAccount);
// delete
router.delete('/:id', deleteAccount);

// update
router.put('/:id', updateAccount);
module.exports = router;
