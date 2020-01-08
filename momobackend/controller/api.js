const _ = require('lodash');

const article = require('../model/article');
const member = require('../model/member');


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


/* WRITE ***************************************/
exports.registration = async (req, res, next) => {
    //console.dir(req.body);
    console.dir(req.body);
    if(req.body.user.password == req.body.user.password_confirmation){
        await member.postRegister(req,res)
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


