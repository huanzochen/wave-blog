const _ = require('lodash');

const article = require('../model/article');
const member = require('../model/member');
const crypt = require('../util/crypt');
const cookieParser = require('cookie-parser');


/* READ *******************************************/

const articleList = async (req, res, next) => {
    let articleList;

    await article.getAllArticle()
    .then(([rows]) => {
        articleList = rows;
    })
    .catch((err) => {
        console.dir("ERR getAllArticle");
        console.dir(err);
    })

    /*
    console.dir("req.session");
    console.dir(req.session);
    console.dir("req.signedCookies");
    console.dir(req.signedCookies.userid);
    */
    //console.dir("res");
    //console.dir(res);
    
    res.send(articleList);
}

const login = async (req, res, next) => {
    let account;
    console.dir(req.body);
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
            res.cookie('userid', req.body.user.username, {
                maxAge: 86400000,
                sucure:false, 
                path: '/', 
                signed: true, 
                id:req.body.user.username
            });
            res.send({
                isLoggedIn: true,
                errorText: "登入成功",
                username: req.body.user.username
            });
            req.session.username = req.body.user.username;

            console.dir("登入-登入成功");
            console.dir(req.signedCookies);
            console.dir(req.signedCookies.userid);
            console.dir(req.session.username);
            console.dir(req.session);
            console.dir(req.sessionID);

        }
        //console.dir([rows]);
        console.dir("/////////////////////////");
        
    })
    .catch((err) => {
        console.dir("登入-未知錯誤");
        console.dir(err);
    });

}

const logged_in = async (req, res, next) => {
    let account;
    await member.validateUser(req, res)
    .then(([rows]) => {
        account = rows;
        if (JSON.stringify(account) === '[]'){
            res.send({
                logged_in: false,
                errorText: "未登入",
                username:""     
            });
        }
        else if (account[0].act_name == req.signedCookies.userid ) {
            console.dir("驗證成功!");
            res.send({
                logged_in: true,
                errorText: "登入成功",
                username: req.signedCookies.userid
            });
        } 

        console.dir(req.signedCookies);


    });
}

const logout = async (req, res, next) => {
    await article.getAllArticle()
    .then(([rows]) => {
        console.dir("logout");
        console.dir(req);
        console.dir(req.signedCookies.userid);
        console.dir(req.sessionID);
        res.clearCookie('userid',req.signedCookies.userid);
        req.session.destroy;
        res.send("200");
    });
}


/* WRITE ***************************************/
const registration = async (req, res, next) => {
    //console.dir(req.body);
    console.dir(req.body);
    if(req.body.user.password == req.body.user.password_confirmation){
        await member.postRegister(req, res)
            .then((err, results, fields) => {
                if(err[0].affectedRows == 1){
                    console.dir("註冊-有新用戶註冊成功!");
                    res.send({
                        isRegistered: true,
                        errorText: "註冊成功"         
                    });
                }
                else{
                    console.dir("註冊-有新用戶註冊失敗!");
                    res.send({
                        isRegistered: false,
                        errorText: "註冊失敗"         
                    });
                }
            })
            .catch(err =>  {
                if(err.sqlState == "23000"){
                    console.dir("註冊-有人註冊重複名稱的用戶!");
                    res.send({
                        isRegistered: false,
                        errorText: "帳號名稱重複!請更換帳號名稱"         
                    }); // 主鍵重複
                }
                else {
                    console.dir("註冊-註冊用戶的未知錯誤!");
                    console.dir(err);
                    res.send({
                        isRegistered: false,
                        errorText: "發生了未知錯誤"         
                    });
                }
            });
    }
    else if(req.body.user.password != req.body.user.password_confirmation){
        console.dir("註冊-兩次密碼不一致!");
        res.send({
            isRegistered: false,
            errorText: "兩次密碼不一致"         
        });
    }
    

}

// 新增文章和編輯文章

const addArticle = async (req, res, next) => {
    console.dir(req.body);
    await member.postArticle(req, res)
        .then((err) => {
            console.dir("addArticle");
            console.dir(err);
            if(err[0].affectedRows == 1) {
                res.send({
                    isAddArticle: true,
                    errorText: "新增文章成功"         
                });
            }
            else if (err[0].affectedRows > 1) {
                res.send({
                    isAddArticle: true,
                    errorText: "編輯文章成功"         
                });
            }
        })
        .catch(err => {
            console.dir("新增-新增文章時出現錯誤!");
            console.dir(err);
        });
}

const deleteArticle = async (req, res, next) => {
    await member.deleteArticle(req, res)
    .then((err) => {
        console.dir("deleteArticle");
        console.dir(err);
        if(err[0].affectedRows == 1) {
            res.send({
                isDeleteArticle: true,
                errorText: "刪除文章成功"         
            });
        }
        else {
            res.send({
                isDeleteArticle: false,
                errorText: "刪除文章錯誤"         
            });
        }
    })
    .catch(err => {
        console.dir("刪除-刪除文章時出現錯誤!");
        console.dir(err);
    });
}

exports.articleList = articleList
exports.login = login
exports.logged_in = logged_in
exports.logout = logout
exports.registration = registration
exports.addArticle = addArticle
exports.deleteArticle = deleteArticle