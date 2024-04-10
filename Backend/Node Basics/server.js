import http from "http";
import fs from "fs";
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write(" <h1>Node Server is up and running</h1>");
        res.end();
    }
    else if(req.url==="/greet") {
        // const content=fs.readFileSync("./greetings.txt");
        // res.write(content.toString());
        // res.write("welcome to about us");

        // const fread=fs.createReadStream("./greetings.txt","utf-8");
        // fread.on("data",(chunk)=>{
        //     // let data=(chunk.toString());
        //     res.write(chunk);
        //     console.log(chunk.toString());
        // })
        // fread.on("end",()=>res.end());
        // res.end();
        fs.createReadStream("./greetings.txt","utf-8").pipe(res);

    }
    else{
        res.writeHead(404,"Not Found");
        res.write("Not Found");
        res.end();
    }
    // res.end();
})
server.listen("5053",console.log("running on 5053"));



// const express=require("express");
// import express from "express";
// const app=express();

// app.get("/",(req,res)=>{
//     res.send("Hello");
    
// })


// app.listen(5000,console.log("Server Started on Port 5000"));



