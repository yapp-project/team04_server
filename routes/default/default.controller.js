let mysql = require('../../config/database/con');
let model = require('../_model/model');
let dir = require('../../public/dir');

exports.get = (req, res) => {
  res.json({
    msg: 'get / connection ok'
  });
};

exports.post = (req, res) => {
  res.json({
    msg: 'post / connection ok'
  });
};