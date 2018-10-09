var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


//ROUTES
app.get("/", function(req, res){
    res.render("home");
});


//SERVER SETUP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started on port " + process.env.PORT);
})