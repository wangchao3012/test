
const md5 = require('md5');
var tool = {
    checkSign: function (obj,token) {
        let keys = [];
        for (var item in obj) {
            keys.push(item)
        }
        keys = keys.sort(function (a, b) {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1
        });
        // 生成加密 
        let content = '';
        for (var i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];
            value != undefined && value != null && value !== '' && (content += key + value)
        }
        return obj.sign == md5(content)
    }
};
module.exports = tool;