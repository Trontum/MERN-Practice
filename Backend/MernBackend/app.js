//imports
import express from "express";


const app=express();
const port=5000;
let homeHtml='<html><head><title>Express</title></head><body><h1>Welcome to MERN Training</h1><br><h3 style="color:green">MERN is MongoDB, ExpressJS, ReactJS, NodeJS</h3></body></html>'


//middlewares
app.use("/static",express.static("public"));



//Routes

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express App</h2>");
})
app.get("/home",(req,res)=>{
    res.send(homeHtml);
})
app.get("/contact",(req,res)=>{
    res.send({
        name:"Eshwar",
        stream:"MERN"
    });
})
app.post("/new",(req,res)=>{
    res.send({message:"new feature will be added soon"});
})


app.listen(port,console.log("Server Started on Port 5000"));