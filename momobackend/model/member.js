const db = require('../util/db');
const crypt = require('../util/crypt');
const moment = require('moment');





module.exports = class{
    //WRITE
    static postRegister(req) {
        let username = req.body.user.username;
        let email = req.body.user.email;
        let password = req.body.user.password;
        password = crypt.crypt(password);
        return(db.execute("INSERT INTO `blog`.`member` (`act_name`, `pwd`, `email`) VALUES (?, ?, ?)", [username, password, email]));
    }

    static postArticle(req) {
        let id;
        if(req.body.newArticle.id == ''){
            id = moment().format('YYYYMMDDHHmmss');
        }
        else {
            id = req.body.newArticle.id;
        }
        console.dir("id");
        console.dir(id);
        let title = req.body.newArticle.title;
        let content = req.body.newArticle.content;
        let username = req.body.newArticle.username;
        return db.execute("INSERT INTO `blog`.`article` (`id`, `act_name`, `title`, `content`, create_time) VALUES (?, ?, ?, ?, NOW()) ON  DUPLICATE KEY UPDATE title = ?, content = ?, edit_time = NOW()", [id, username, title, content, title, content]);
    }

    //READ
    static queryUser(req) {
        let username = req.body.user.username;
        return(db.execute("SELECT * FROM `blog`.`member` WHERE act_name = ? ", [username]));
    }

    static validateUser(req) {
        let username = "";
        if(req.signedCookies.userid != null){
            username = req.signedCookies.userid;
        }
        return(db.execute("SELECT * FROM `blog`.`member` WHERE act_name = ? ", [username]));
    }
    
}
