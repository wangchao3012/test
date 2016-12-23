const ssdb = require('ssdb');

const pool = ssdb.createPool(
    {
        host: '127.0.0.1',
        port: 8888,
        auth: undefined,  // ssdb server auth password
        authCallback: function (err, data) { if (err) throw err; },  // callback function on auth
        size: 1,  // connection pool size
        timeout: 0,
        promisify: true,  // make api methods promisify.
        thunkify: false,  // make api methods thunkify.
        // policy: Pool.policies.round_robin,
    }
);
var co = require('co')

var cache = {
    set: function () {

        return async (ctx, next) => {
            var conn = pool.acquire();
            var aa = await conn.set('key', 'val');
            console.log('aa:', aa);
        }

    }, set2: async function () {

        var conn = pool.acquire();
        // var a = yield conn.set('key', 'val222');
        var b = await conn.get('key');

        console.log(b);  // 1 'val' 
        return b;

    }
}
module.exports = cache;




