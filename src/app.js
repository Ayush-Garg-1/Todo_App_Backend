const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

require('./db/conn');
const TodoInfo = require("./models/todoInfo");

// Required For fetch data
const cors = require('cors');
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000', 'http://localhost:2000']
}));

// For Access Data
app.use(express.json());
app.use(express.json({ extended: false }));

app.get('/getdata', async (req,res)=>{
    console.log("Welcome In Todo App")
    const data = await TodoInfo.find();
    res.send(data);
})

app.post("/savedata",async (req,res)=>{
    console.log("Your Todo is Saved");
    const text = req.body.text; 
    try {
        await TodoInfo.create({
            text
        });   
        res.status(200).send("Your Todo is Saved");
    } catch (error) {
        console.log(error)
    }
});

app.post("/delete",async (req,res)=>{
    console.log("Your Todo is Delete");
    const id = req.body.id; 
    console.log(id);
    try {
        await TodoInfo.deleteOne({_id:id});
        res.status(200).send("Your Todo is Delete");
    } catch (error) {
        console.log(error)
    }
});

app.post("/edit",async (req,res)=>{
    console.log("Your Todo is Edit");
    const id = req.body.id; 
    const newText=req.body.text;
    console.log(newText);
    try {
        await TodoInfo.updateOne({_id:id},{$set:{text:newText}});
        res.status(200).send("Your Todo is Edit");
    } catch (error) {
        console.log(error)
    }
});


app.listen(port,()=>{
    console.log(`Server is listen at port ${port}`)
});