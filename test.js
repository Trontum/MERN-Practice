setTimeout(function(){
    console.log("Hello Again");
},10000);
function hello(){
    console.log("Hello!");
}
hello();
function mern(react){
    console.log("MongoDB");
    console.log("Express");
    react();
    console.log("NodeJS");
}
function react(){
    console.log("ReactJS");
}
mern(react);