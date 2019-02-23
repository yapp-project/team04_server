const mysql = require('mysql');
let tempPool = 'null'; // singleton Pattern
let env = require('./env');

// 즉시 실행
module.exports = (() => {
    return {
        init: () => {
            if (tempPool == 'null') {
                console.log('tempPool is null');
                // console.log(env);
                tempPool = mysql.createPool(env.mysql);
                // console.log(tempPool);
            } else {
                console.log('tempPool is not null');
            }
            return tempPool;
        },

        query: (query, inputArray, callback) => {
            tempPool.getConnection((err, connection) => {
                if (err) {
                    console.log(err);
                }
                // console.log(connection);
                // console.log(query);
                // console.log(inputArray);
                // console.log(callback);

                connection.query(query, inputArray, (err, rows) => {
                    if (err) {
                        console.log(err);
                        callback(undefined);
                        connection.release();
                    } else {
                        //검색해서 나온 데이터들을 호출한 콜백함수로 넘긴다.
                        callback(rows);
                        //release를 해주어 커넥션이 pool로 되돌아 갈 수 있도록 해줍니다.
                        // console.log('꺼짐');

                        connection.release();
                        //이제 이 커넥션은 pool로 돌아가 다른 주체가 사용 할 수 있도록 준비합니다.
                    }
                });
            });
        }
    };
})();