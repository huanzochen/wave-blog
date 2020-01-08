const _ = require('lodash');

const article = require('../model/article');


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
    console.dir(res.body);
    
    res.send("hi"); // update to match the domain you will make the request from
    

}


