const dbAccount = require('../dbAccount')
const uuid = require('uuid/v4');


const rp = require('request-promise');
const tool = require('../../common/tool');
// const exc = new exc1();
const User=require('../../model/user');
const Role=require('../../model/role');

class user extends dbAccount {
    constructor() {
        super();
    }
    async   login(d) {
        var mu;
        switch (d.type) {
            //用户名密码登录
            case 1:
                mu = await this.findOne({
                    m: 'user',
                    opt: {
                        where: {
                            $or: [
                                {
                                    loweredUserName: d.username
                                }, {
                                    mobile: d.username
                                }
                            ]
                        }

                    }
                });

                console.log('mu::', mu);
                tool(mu).notNull('用户不存在').notNull('用户名或密码错误');
                break;
            // 手机号密码登录
            case 2:


                break;
            // 第三方登录
            case 3:


                break;
            default:
                break;
        }

        // await db.sequelize.model('user').findOne({
        //     where: {
        //         $or: [
        //             {
        //                 loweredUserName: m.username
        //             }, {
        //                 mobile: m.username
        //             }
        //         ]
        //     }

        // }).then(res => {
        //     console.log('res::', res);

        // }); 
        return mu
    };
    async    getWXAccessToken(m) {
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
    };
    async register() {
//  User
    }
}

module.exports = user;

