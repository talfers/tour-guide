var mongoose = require("mongoose");

var tourSchema = {
    name: String,
    //relate guide to user eventually
    //author: {
        //id: {
            //type: mongoose.Schema.Types.ObjectId,
            //ref: "User"
        //},
        //username: String
    //},
    guide: String,
    type: String,
    difficulty: String,
    duration: String,
    description: String,
    //comments: [{
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "Comment"
        //Saying comments should be an array of ObjectIds
    //}]
};

var Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;