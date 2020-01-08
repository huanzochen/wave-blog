const db = require('../util/db');
const crypt = require('../util/crypt');



//WRITE

module.exports = class{
    static postRegister(req) {
        let username = req.body.user.username;
        let email = req.body.user.email;
        let password = req.body.user.password;
        password = crypt.crypt(password);
        return(db.execute("INSERT INTO `blog`.`member` (`act_name`, `pwd`, `email`) VALUES (?, ?, ?)", [username, password, email]));
    }
}
