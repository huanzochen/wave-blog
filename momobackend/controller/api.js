const _ = require('lodash');

const article = require('../model/article');
const member = require('../model/member');
const crypt = require('../util/crypt');


/* READ *******************************************/

exports.articleList = async (req, res, next) => {
    let articleList;

    await article.getAllArticle()
    .then(([rows]) => {
        articleList = rows;
    })
    .catch((err) => {
        console.dir("ERR getAllArticle");
        console.dir(err);
    })

    res.send(articleList);
}

exports.login = async (req, res, next) => {
    let account;

    await member.queryUser(req, res)
    .then(([rows]) => {
        account = rows;
        // 帳號存在檢核
        if (JSON.stringify(account) === '[]' || crypt.crypt(req.body.user.password) != account[0].pwd){
            console.dir("登入-帳號或密碼錯誤");
            res.send({
                isLoggedIn: false,
                errorText: "帳號或密碼錯誤"         
            });
        }
        else if (crypt.crypt(req.body.user.password) === account[0].pwd){
            console.dir(crypt.crypt(req.body.user.password));
            console.dir("登入-登入成功");
            res.send({
                isLoggedIn: true,
                errorText: "登入成功"         
            });
        }
        console.dir([rows]);
        console.dir("/////////////////////////");
        
    })
    .catch((err) => {
        console.dir("登入-未知錯誤");
        console.dir(err);
    });

}


/* WRITE ***************************************/
exports.registration = async (req, res, next) => {
    //console.dir(req.body);
    console.dir(req.body);
    if(req.body.user.password == req.body.user.password_confirmation){
        await member.postRegister(req, res)
            .then((err, results, fields) => {
                if(err[0].affectedRows == 1){
                    console.dir("註冊-有新用戶註冊成功!");
                    res.send("registration_ok");
                }
                else{
                    console.dir("註冊-有新用戶註冊失敗!");
                    res.send("registration_failed");
                }
            })
            .catch(err =>  {
                if(err.sqlState == "23000"){
                    console.dir("註冊-有人註冊重複名稱的用戶!");
                    res.send("registration_duplicated"); // 主鍵重複
                }
                else {
                    console.dir("註冊-註冊用戶的未知錯誤!");
                    console.dir(err);
                    res.send("unknownerr");
                }
            });
    }
    else if(req.body.user.password != req.body.user.password_confirmation){
        console.dir("註冊-兩次密碼不一致!");
        res.send("password_validate_err");
    }
    
    
    

}


