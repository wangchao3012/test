
const md5 = require('md5');
var tool = {
    signJoin: function (obj, token) {
        // 生成加密 
        let content = '';
        for (var key of Object.keys(obj).sort()) {
            let value = obj[key];
            key != 'si' && value != undefined && value != null && value !== '' && (content += key + value)
        }
        return content;

        // keys = keys.sort(function (a, b) {
        //     return a.toLowerCase() > b.toLowerCase() ? 1 : -1
        // }); 
    },
    checkSign: function (obj, token) {

        return obj.sign == md5(this.signJoin(obj, token))
    },
    // set: function (obj) {
    //     this.obj = obj;
    // },
    // get: function () {
    //     return this;
    // },

};

// tool.prototype.isNull = function (msg) {
//     if (!this.obj) {
//         throw msg;
//     }
//     return this;
// };

// (function (undefined) {
//     if (tool.prototype.isNull === undefined) { // fix for iOS 3.2
// 		/**
// 		 * 拼接缓存key名称
// 		 */
//         tool.prototype.isNull = function () {
//             var s = this + '_';
//             for (var i = 0; i < arguments.length; i++) {
//                 s += arguments[i] + '_';
//             }
//             return s;
//         };
//     }
//     Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
//         obj['__proto__'] = proto;
//         return obj;
//     };
// })();


module.exports = tool;