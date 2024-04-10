// const fs=require("fs");
// const fread=fs.createReadStream("./notes.txt");
// let i=1;
// fread.on("data",(chunk)=>{
//     console.log(i,chunk.toString());
//     i+=1;
// })
// fread.on("end",()=>console.log("Reading is complete"));

// const fwrite=fs.createWriteStream("./notes.txt");
// let tech1="MongoDB"
// let tech2="ExpressJS"
// let tech3="ReactJS"
// let tech4="NodeJS"
// let i=0;
// while(i<1e6){
//     fwrite.write(tech1);
//     i+=1;
// }

// fwrite.write(tech2);
// fwrite.write(tech3);
// fwrite.write(tech4);
// fwrite.end();
// fwrite.on("finish",()=>console.log("Writing finished"));


const fs=require('fs')
 
console.log("reading started")
fs.readFile('./notes.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
    console.log("reading ended..")
});

 
let message="Content belongs to the file.."
console.log("writing started")
fs.writeFile('./notes.txt',message,(err)=>{
    if(err) throw err;
    console.log("File is saved");
    console.log("writing ended")
})

 