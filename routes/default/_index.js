var express = require('express');
var router = express.Router();
let authenticate = require('../../config/auth/authenticate');

const controller = require('./default.controller');

/* GET home page. */
router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
