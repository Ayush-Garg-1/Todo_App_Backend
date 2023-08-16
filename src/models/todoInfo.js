const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text:{
        type:String,
        reqired:true
    }
});

const TodoItem = new mongoose.model("TodoItem",TodoSchema);

module.exports = TodoItem;