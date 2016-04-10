var express = require("express");
var router = express.Router();
var path = require("path");
var Favorites = require("../models/favorites.js");

router.get("/", function(req, res){
    Favorites.find({}, function(err, data){
      if(err) {
        console.log(err);
      }

      res.send(data);
    });
});

router.post("/", function(req, res){
    var addedFavorite = new Favorites({
      "title": req.body.title,
      "name": req.body.name,
      "length": req.body.length,
      "description": req.body.description
    });

    addedFavorite.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

// router.delete("/:id", function(req, res){
//     console.log(req.params.id);
//     Heroes.find({ _id: req.params.id }).remove(function(err, data){
//       if(err){
//         console.log(err);
//       }
//       res.send(data);
//     });
// });

router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
