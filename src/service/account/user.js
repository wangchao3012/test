const db = require('../db')
const uuid = require('uuid/v4');


const rp = require('request-promise');
const tool = require('../../common/tool');
const exc = require('../../common/exc');

let User = {
    login: async function (m) {
        var mu = await db.findById({ model: 'user', id: m.id });
        exc.set(mu).isNull('ssssss');
        // var bb = tool.get(mu).isNull('用户不存在');
        // mu.isNull22('用户不存在')
        // throw '用户不存在'
        console.log('m::', m, mu);
        return mu
    },
    getWXAccessToken: async function (m) {
        var aa = await rp('https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code')
            .then(function (res) {
                console.log('res::', res);
                return res;
                // Process html... 
            })
            .catch(function (err) {
                // Crawling failed... 
            });
        console.log('res::', response);
    }

}
module.exports = User;

