const db = require('../util/db');

//READ

module.exports = class{
    static getAllArticle() {
        return db.query('SELECT * FROM blog.article');
    }
}
