/**
 * Created by ridickle on 2018. 7. 10..
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var R_UMDSchema = new Schema({
    uId: String,
    mType: String,
    umdReports: JSON,
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
R_UMDSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('R_UMD', R_UMDSchema);