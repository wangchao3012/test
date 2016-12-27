
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
    }, get1: function (m) {
        this = m;
    },
    isNull: function (msg) {
        if (!this) {
            throw msg;
        }
        return this;
    }
};


module.exports = tool;