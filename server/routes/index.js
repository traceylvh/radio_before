var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");
var nightfall = require("../public/assets/shows/nightfall.json");
var vpoint = require("../public/assets/shows/vpoint.json");


//get nightfall data from json file
router.get('/nightfall', function(req, res) {
  // console.log(nightfall.files);
  var nightfallArray = nightfall.files;

    res.send(nightfallArray);
});

//get vpoint data from json file
router.get('/vpoint', function(req, res) {
  // console.log(vpoint.files);
  var vpointArray = vpoint.files;
    // console.log("from index.js: ", vpointArray);
    res.send(vpointArray);
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
