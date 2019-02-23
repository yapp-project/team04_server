let map = new Map();

map.set(200, 'success');         // 성공	
map.set(500, 'internalError');   // 서버내 발생 에러	
map.set(401, 'expired');         // sns에서 제공하는 accessToken이 손상 또는 만료됨	
map.set(501, 'verify failed');   // jwt 토큰 검증 불가능 (서버 오류)	
map.set(409, 'conflict');        // 이미 타기기에서 로그인 되어있는 상태	
map.set(404, 'notFound');        // 해당 조건에 맞는 유저가 없음	


module.exports = map;