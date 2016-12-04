var express = require("express");
var bodyParser = require('body-parser');

var app = new express;


// サーバーの起動
var server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// publicフォルダ以下の静的ファイルを公開
app.use(express.static('public'));

var webpages = {
    "google": "https://www.google.co.jp/",
    "amazon": "https://www.amazon.co.jp/",
    "apple": "http://www.apple.com/jp/"
};

// API
// "/api/webpages"のURLにgetするとJSON形式のwebpagesオブジェクトを返却する
app.get("/api/webpages", function (req, res) {
    res.json(webpages);
});

// パラメーターを指定した場合
app.get("/api/webpages/key", function (req, res, next) {

    console.log(req.query.pagekey);

    for (var key in webpages) {
        if (key === req.query.pagekey) {
            var result = {key : webpages[key]}
        }
    }
    res.json(result);
});

var emails = [
    "aaa@gmail.com",
    "bbb@gmail.com",
    "ccc@gmail.com",
    "ddd@gmail.com"
];

// Postのときはこれがないとこける express 4.x以降
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.post("/api/email", function (req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    res.json(checkEmail(req.body.email));
});

var checkEmail = function(email) {


    var result = {
        isSuccess : true,
        msg : "メールアドレスは登録可能です。"
    };

    // 既に登録されているかのチェック
    if (emails.indexOf(email) >= 0) {
        result.isSuccess = false;
        result.msg = "既にメールアドレスが登録されています。";
    }


    // emailのフォーマットかどうかのチェック
    var p = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

    // emailのフォーマットにマッチしない場合
    if (p.test(email) === false ) {
        result.isSuccess = false;
        result.msg = "メールアドレスのフォーマットとして正しくありません。";
    }

    return result;

}