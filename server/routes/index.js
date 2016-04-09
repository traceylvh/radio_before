var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");
var nightfall = require("../public/assets/shows/nightfall.json");


//trying to get nightfall data from json file
router.get('/nightfall', function(req, res) {
  var nightfallArray = nightfall.files;
    // console.log("from index.js: ", nightfallArray);
    res.send(nightfallArray);
});

//write post here
router.post("/", passport.authenticate("local", {
    successRedirect: "/assets/views/users.html",
    failureRedirect: "/"
}));


router.get("/*", function(req,res,next){
    console.log(req.params[0]);
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
