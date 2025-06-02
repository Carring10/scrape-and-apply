const express = require('express');
const rolesControllers = require('../controllers/rolesControllers');
const router = express.Router();

// @route GET and POST
router.route("/")
    .get(rolesControllers.selectAllRoles)
    .post(rolesControllers.addNewRole);

module.exports = router;