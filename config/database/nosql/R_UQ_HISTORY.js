/**
 * Created by ridickle on 2018. 7. 10..
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var R_UQ_HISTORYSchema = new Schema({
    uId: String,
    qType: String,
    uqScore: JSON,
    uqFast: Array,
    uqSlow: Array,
    uqUpdated: { type: Date, default: Date.now }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// // hash 생성
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // 값 비교
// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password)
// };
R_UQ_HISTORYSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('R_UQ_HISTORY', R_UQ_HISTORYSchema);