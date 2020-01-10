const db = require('../util/db');
const crypt = require('../util/crypt');





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
        let title = req.body.newArticle.title;
        let content = req.body.newArticle.content;
        let username = req.body.newArticle.username;
        return db.execute("INSERT INTO `blog`.`article` (`act_name`, `title`, `content`, create_time) VALUES (?, ?, ?, NOW())", [username, title, content]);
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
