var express = require("express");
var router = express.Router();
var path = require("path");
var Heroes = require("../models/heroes.js");

router.get("/", function(req, res){
    Heroes.find({}, function(err, data){
      if(err) {
        console.log(err);
      }

      res.send(data);
    });
});

router.post("/", function(req, res){
    var addedHero = new Heroes({
      // "alias": req.body.alias,
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      // "city": req.body.city,
      // "power_name": req.body.power_name,
    });

    addedHero.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.delete("/:id", function(req, res){
    console.log(req.params.id);
    Heroes.find({ _id: req.params.id }).remove(function(err, data){
      if(err){
        console.log(err);
      }
      res.send(data);
    });
});

router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
