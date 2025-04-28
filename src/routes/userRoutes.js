const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile,
  deleteUser
} = require('../controllers/userController');

router.get('/me', getProfile);
router.put('/me', updateProfile);
router.delete('/me', deleteUser);

module.exports = router;