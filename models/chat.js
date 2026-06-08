const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    
    msg : {
        type : String,
        maxLength : 50
    },
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        required : true 
    }
});
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;