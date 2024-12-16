const express = require('express')
const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://arun001:Arun1234@cluster0.nwkoe.mongodb.net/temp1")
const app = express();
app.use(express.json());

const User= mongoose.model('user',{name:String,password:String,age:Number});

app.get('/',function(req,res){
    res.send("hello world")
})
app.post('/signup',function(req,res){
    const name=req.body.name;
    const password=req.body.password;
    const age=req.body.age;
    const user1=new User({
        name:name,
        password:password,
        age:age
    });
    user1.save();
})

app.listen(3000);
