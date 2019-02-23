let mysql = require('../../config/database/con');
let jsonDB = require('../../config/database/jsonDB');
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

exports.tip = (req, res) => {
  let honeyTip = jsonDB.goolTip;
  let type = req.query.type;

  if (type == 'nose')
    res.json(model.default('', honeyTip,
      '꿀팁 전송 완료',
      model.response(200, dir.get(200))));
  else {
    res.json(model.default('', honeyTip,
      '해당 타입에 맞는 데이터가 없습니다.',
      model.response(206, dir.get(206))));
  }
};