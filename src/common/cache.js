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

var cache = {
    key: {
        error: 'error',
    },
    set: async function (key, val) {

        var conn = pool.acquire();
        // var a = yield conn.set('key', 'val222');
        var b = await conn.get('key');

        console.log(b);  // 1 'val' 
        return b;

    }, get: async function () {

        var conn = pool.acquire();
        // var a = yield conn.set('key', 'val222');
        var b = await conn.get('key');

        console.log(b);  // 1 'val' 
        return b;

    },
    hset: async function (n, k, v) {
        var conn = pool.acquire();
        return await conn.hset(k, n, v);
    },
    hget: async function (n, k) {
        var conn = pool.acquire();
        return await conn.hget(k, n);
    },
    qpush: function (k, v) {
        var conn = pool.acquire();
        return conn.qpush(k, v);
    },
    qpop: async function (k) {
        var conn = pool.acquire();
        return await conn.qpop(k);
    },
}
module.exports = cache;




