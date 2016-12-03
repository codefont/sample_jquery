let express = require("express");
let app = new express;


// サーバーの起動
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// publicフォルダ以下の静的ファイルを公開
app.use(express.static('public'));

var webpages = {
    "google":"https://www.google.co.jp/",
    "amazon":"https://www.amazon.co.jp/",
    "apple":"http://www.apple.com/jp/"
}; 

// API
// "/api/webpages"のURLにgetするとJSON形式のwebpagesオブジェクトを返却する
app.get("/api/webpages", function(req, res){
    res.json(webpages);
});