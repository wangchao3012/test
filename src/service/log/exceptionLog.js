const dbLog = require('../dbLog');

class exceptionLog extends dbLog {
    constructor() {
        super();
    }
    async saveLog() {
        // var ex = await this.findOne({ m: 'exceptionLog' });
        var s = await this.findOne({ m: 'exceptionLog' });
        console.log('log::')
    }
}

module.exports = exceptionLog;