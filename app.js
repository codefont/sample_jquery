let express = require("express");
let app = new express;

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// app.set('view engine', 'html');

// app.get("/", function(req, res, next){
//     res.render("index", {});
// });

app.use(express.static('public'));