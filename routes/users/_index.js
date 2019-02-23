var express = require('express');
var router = express.Router();
let authenticate = require('../../config/auth/authenticate');

const controller = require('./user.controller'); 

/* GET users listing. */
router.post('/', controller.index);
router.post('/login', controller.login);
router.post('/authenticate', controller.authenticate);
router.post('/logout', authenticate.authenticateServer, controller.logout);

module.exports = router;
