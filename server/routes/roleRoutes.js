const express = require('express');
const rolesControllers = require('../controllers/rolesControllers');
const router = express.Router();

// @route GET and POST
router.route("/").get(rolesControllers.selectAllRoles);

module.exports = router;