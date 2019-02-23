let jwtLib = require('../../config/auth/authenticate');
let model = require('../_model/model');
let dir = require('../../public/dir');
let db = require('../../config/database/con');

exports.index = (req, res) => {
    res.json(model.default(
        clientToken, 'post / request finished',
        '/ endpoint connection success',
        dir.get(200)));
};

exports.login = (req, res) => {
    res.json(model.default(
        clientToken, {},
        '성공?',
        dir.get(200)));
};

// 인증
exports.authenticate = (req, res) => {
    let clientToken = req.headers.authorization;
    console.log(clientToken);
    let currentFlag = 0;

    if (clientToken != '') {
        res.json(model.default(
            clientToken, {},
            '성공?',
            dir.get(200)));
    } else {
        // 서버 내 오류인 경우 (ex> token값 손상)
        res.json(model.default(
            clientToken, {},
            '기존 로그인 내용 정보가 만료 되었습니다. 새로 로그인해주시기 바랍니다.',
            dir.get(401)));
    }
};

exports.logout = (req, res) => {
    res.json(model.default(
        '', {},
        '성공적으로 로그아웃 되었습니다.',
        dir.get(200)));
};

// jwt 토큰 제작하는 함수
function makeToken(email, loginType, accessToken, updated) {
    // 2. accessToken 적합성 검증 (네이버는 없음)
    let toggle = jwtLib.authenticateToken(loginType, accessToken);
    if (toggle == 200) {
        return jwtLib.encodeToken(email, loginType, accessToken, updated);
    } else if (toggle == 202) {
        return model.statusValue(toggle, '');
    }
}

// // mysql query example
// mysql.query(`SELECT FROM T_USERS WHERE uId="${uId}"`, [], (userRows) => {
//     if (userRows.length == 0) { // 매치되는 데이터 없음
//         console.log('매치되는 데이터 없음');
//     } else {                    // 매치되는 데이터 있음
//         console.log('매치되는 데이터 없음');
//     }
// });