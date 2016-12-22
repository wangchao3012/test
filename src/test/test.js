var user=require('./user');
console.log(user.login('张小三'));
console.log('1111::'+user.name);
// module.exports=user;
exports.u=user;
console.log(module);
