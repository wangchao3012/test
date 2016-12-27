
class exc {
    constructor() {
        super();
    };
       function set(obj) {
    this.obj = obj;
    return this;
}
function isNull(msg) {
    if (!this.obj) {
        throw msg;
    }
    return this;
}


// exc.prototype.isNull = function (msg) {
//     if (!this.obj) {
//         throw msg;
//     }
//     return this;
// };
// (function ($, undefined) {

//     if ($.prototype.isNull === undefined) { // fix for iOS 3.2

//         $.prototype.isNull = function (msg) {
//             if (!this.obj) {
//                 throw msg;
//             }
//             return this;
//         };
//     }
//     Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
//         obj['__proto__'] = proto;
//         return obj;
//     };
// })(exc);

module.exports = exc;