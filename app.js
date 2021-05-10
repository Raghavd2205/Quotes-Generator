const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

const port = process.env.PORT || 8000



app.use(express.static('views/images'));
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render('index.hbs');
});
app.get("*",(req,res)=>{
    
   res.write("erroe!!");
});
app.listen(port,()=>{
    console.log("listen");
});
