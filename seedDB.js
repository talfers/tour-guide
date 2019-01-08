var mongoose = require("mongoose");
var Tour = require("./models/tour.js");

function seedDB() { 
    Tour.remove({}, function(err, tour){
        if(err){
            console.log("Something went wrong!");
        } else {
            console.log("Removed all tours");
            Tour.create({
                name: "Devil's Walkway",
                //relate guide to user eventually
                guide: "Taylor Alfers",
                type: "Hike",
                difficulty: "Hard",
                duration: "5 days",
                description: "A hike through the desert mountains of Southwestern Colorado. This 5 day journey will take you to the furthest corner from civilization you can find in the lower 48."
            }, function(err, tour){
                if(err){
                    console.log("Something went wrong!");
                } else {
                    console.log("Tour saved to the database");
                }
            });
        }
    });
}

module.exports = seedDB;