let jwt = require('jsonwebtoken');
let model = require('../../routes/_model/model');
let private = require('../private');
// let bcrypt = require('bcrypt-nodejs'); // 암호화를 위한 모듈
let crypto = require('crypto');
let db = require('../database/con');
let dir = require('../../public/dir');


module.exports = (() => {
    return {
        // 서버 내에서 토큰 적합성 검사
        authenticateServer: (req, res, next) => {
            next();
        },
        // 토큰 적합성 검사
        authenticateToken: (loginType, accessToken) => {
            if (loginType == 'kakao') {
                // token이 만료되지 않았을 경우
                return 200;

                // // token이 유효하지 않은 경우
                // return 202;

            } else { // naver
                return 200;
            }
        },
        // clientToken 생성
        encodeToken: (email, loginType, accessToken, updated) => {
            // create a promise that decodes the token
            let token = jwt.sign({
                email: email,
                loginType: loginType,
                accessToken: accessToken,
                updated: updated
            }, private.jwtSecret);

            if (token) {
                return token;
            } else {
                return '';
            }
        },

        // clientToken 해석
        decodeToken: (clientToken) => {
            let decoded = jwt.verify(clientToken, private.jwtSecret);
            return decoded;
        },

        encryptData: (loginType, data) => {
            console.log(loginType, data);
            return new Promise(function (resolve, reject) {
                // var data = 100;
                // bcrypt.genSalt(private.salt, function (err, salt) {
                //     if (err) {
                //         console.log('bcrypt.genSalt() error ', err);
                //         resolve(203);
                //     } else {
                //         bcrypt.hash(data, salt, null, function (err, hash) {
                //             if (err) {
                //                 console.log('bcrypt.hash() error : ', err);
                //                 resolve(203);
                //             } else {
                //                 resolve(hash);
                //             }
                //         });
                //     }
                // });
                let hash = '';

                if (loginType == 'kakao') {
                    hash = crypto.createHmac('sha256', private.jwtSecret)
                        .update(data)
                        .digest('hex');
                } else {
                    hash = data;
                }

                resolve(hash);
            });
        }
    };
})();