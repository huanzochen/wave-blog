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
        console.dir("ERR getAllArticle!");
        console.dir(err);
    })



}


