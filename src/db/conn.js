const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Todo_App")
.then(()=>{
    console.log(`MongoDb Connection Successfully...`)
})
.catch((err)=>{
    console.log(`MongoDb Connection Error ${err}`)
})