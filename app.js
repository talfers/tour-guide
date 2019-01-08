//GLOBAL VARIABLES
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Tour            = require("./models/tour.js"),
    methodOverride  = require("method-override"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    User            = require("./models/user.js"),
    seedDB          = require("./seedDB.js");


//APP SETUP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb://localhost/mountain_travel");
app.use(methodOverride("_method"));

//USER AND PASSPORT SETUP
app.use(require("express-session")({
secret: "Rocket is the cutest dog in the world!",
save: false,
saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
res.locals.currentUser = req.user;
next();
});

//Seed your DB
seedDB();

//ROUTES
app.get("/", function(req, res){
    res.render("home");
});

app.get("/tours", function(req, res){
    res.render("tours");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

//SERVER SETUP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started on port " + process.env.PORT);
})