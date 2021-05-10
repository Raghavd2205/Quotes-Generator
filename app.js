const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const path1 = process.env.PORT || 8080
app.use(express.static('views/images'));
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render('index.hbs');
});
app.get("*",(req,res)=>{
    
   res.write("erroe!!");
});
app.listen(port1,()=>{
    console.log("listen");
});