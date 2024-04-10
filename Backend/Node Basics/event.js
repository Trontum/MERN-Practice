let eventEmitter=require("events").EventEmitter;
let event=new eventEmitter();
event.on("click",()=>console.log("click event"));
event.on("mouseover",()=>console.log("mouseover event"));
event.on("change",()=>console.log("change event"));

event.emit("click");
event.emit("mouseover");
event.emit("change");