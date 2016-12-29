const dbLog = require('../dbLog');

class exceptionLog extends dbLog {
    constructor() {
        super();
    }
    async saveLog() {
        // var ex = await this.findOne({ m: 'exceptionLog' });
        var s = await this.findOne({ m: 'exceptionLog' });
        var m = await this.sequelize.model('exceptionLog').findOne({ id: 1 }).then(res => {
            console.log('res:', res);

        });
        console.log('log::')
    }
}

module.exports = exceptionLog;