module.exports.default = (accessToken, data, detail, response) => {
    return {
        'accessToken': accessToken,
        'data': data,
        'detail': detail,
        'response': response
    };
};