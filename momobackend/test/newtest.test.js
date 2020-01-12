//一個沒有監聽端口的 Express 實例
const app = require('../app');
// Express 實例傳入 supertest，使其運行實例
const request = require('supertest')(app);
// 斷言測試資料庫
const assert = require('power-assert');

const chai = require('chai');

const expect = chai.expect;

describe('#測試 api 取得文章列表', function () {
    // 同步測試
    it('GET /api/articlelist', function() {
        assert(1 === 1);
    });
    // 異步測試
    // 異步中，done 在異步結束後執行
    it('GET /api/articlelist', function (done) {
        request
            .get('/api/articlelist') // 接口地址
            .expect(200) // 判断状态码
            .end(function (err, res) { // 请求结束后拿到返回的数据
                if (err) return done(err);
                //console.dir("res");
                //console.dir(res);
                //console.dir(res.body);
                expect('Content-Type', /json/);
                expect(res.body).to.be.a('Array');
                expect(res.body[0]).to.be.a('Object');
                done();
            });
    });
});

describe('#測試 api 登入功能-成功', function () {
    // 異步測試
    // 異步中，done 在異步結束後執行
    it('POST /api/login/submit', function (done) {
        request
            .post('/api/login/submit') // 接口地址
            .send({user:{username: 'sysadmin', password: '001'}})
            .expect(200) // 判断状态码
            .end(function (err, res) { // 请求结束后拿到返回的数据
                if (err) return done(err);
                console.dir("res");
                //console.dir(res);
                //console.dir(res.body);
                expect(res.body.isLoggedIn).to.equal(true);
                expect(res.body.errorText).to.equal('登入成功');
                done();
            });
    });
});

describe('#測試 api 登入功能-失敗', function () {
    // 異步測試
    // 異步中，done 在異步結束後執行
    it('POST /api/login/submit', function (done) {
        request
            .post('/api/login/submit') // 接口地址
            .send({user:{username: 'sysadmin', password: '8787'}})
            .expect(200) // 判断状态码
            .end(function (err, res) { // 请求结束后拿到返回的数据
                if (err) return done(err);
                console.dir("res");
                //console.dir(res);
                //console.dir(res.body);
                expect(res.body.isLoggedIn).to.equal(false);
                expect(res.body.errorText).to.equal('帳號或密碼錯誤');
                done();
            });
    });
});

describe('#測試 api 新增文章-成功', function () {
    // 異步測試
    // 異步中，done 在異步結束後執行
    it('POST /api/newarticle/submit', function (done) {
        request
            .post('/api/newarticle/submit') // 接口地址
            .send({
                newArticle:{
                    id: '208701010000',
                    username: 'sysadmin',
                    title: 'unit_test only',
                    content: 'forunittest forunittest forunittest forunittestforunittestforunittest',
                }
            })
            .expect(200) // 判断状态码
            .end(function (err, res) { // 请求结束后拿到返回的数据
                if (err) return done(err);
                console.dir("res");
                //console.dir(res);
                //console.dir(res.body);
                expect(res.body.isAddArticle).to.equal(true);
                expect(res.body.errorText).to.equal('新增文章成功');
                done();
            });
    });
});

describe('#測試 api 刪除文章-成功', function () {
    // 異步測試
    // 異步中，done 在異步結束後執行
    it('POST /api/deletearticle/submit', function (done) {
        request
            .post('/api/deletearticle/submit') // 接口地址
            .send({
                user:{
                    id: '208701010000',
                    username: 'sysadmin',
                    title: 'unit_test only',
                    content: 'forunittest forunittest forunittest forunittestforunittestforunittest',
                }
            })
            .expect(200) // 判断状态码
            .end(function (err, res) { // 请求结束后拿到返回的数据
                if (err) return done(err);
                console.dir("res");
                //console.dir(res);
                //console.dir(res.body);
                expect(res.body.isDeleteArticle).to.equal(true);
                expect(res.body.errorText).to.equal('刪除文章成功');
                done();
            });
    });
});