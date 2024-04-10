
// // // var temp = "1";
// // // console.log(temp);
// // // var temp = "2";
// // // console.log(temp);

// // // let temp1 = "3";
 
// // // console.log(temp1);
// // // temp1 = "4";
// // // console.log(temp1);

// // // const temp2 = "5";
// // // console.log(temp2);

// // var temp=1;
// // function print(){
// //     var temp=2;
// //     console.log(temp);
// // }
// // print();
// // console.log(temp);
// // let temp1=1;
// // function print1(){
// //     let temp1=2;
// //     console.log(temp1);
// // }
// // print1();
// // console.log(temp1);
// // const temp2=1;
// // function print2(){
// //     const temp2=2;
// //     console.log(temp2);
// // }
// // print2();
// // console.log(temp2);
// // function print3(){
// //     var temp=3;
// //     if(temp==3){
// //         var temp3=4;
// //         console.log(temp3);
// //     }
// //     else{
// //         console.log(temp);
// //     }
// // }
// // print3();
// // console.log(temp);
// // function print4(){
// //     let temp1=3;
// //     if(temp1==3){
// //         let temp3=4;
// //         console.log(temp3);
// //     }
// //     else{
// //         console.log(temp1);
// //     }
// // }
// // print3();
// // console.log(temp1);
// // function print5(){
// //     const temp2=3;
// //     if(temp2==3){
// //         const temp3=4;
// //         console.log(temp3);
// //     }
// //     else{
// //         console.log(temp2);
// //     }
// // }
// // print5();
// // console.log(temp2);


// function add(a,b){
//     console.log(a+b);
// }
// add(1,2);

// var add1=function (a,b){
//     console.log(a+b);
// }
// add1(1,2);
// var add2=(a,b)=> console.log(a+b);
// add2(1,2);

// function print() {
//     console.log(0);
//   }
   
//   function print1(num1) {
//     console.log("Hello " + num1);
//   }
   
//   function print2(num1, num2) {
//     console.log("Hello " + num1 + ", " + num2);
//   }
   
//   function print3(num1, num2, num3) {
//     console.log("Hello " + num1 + ", " + num2 + ", " + num3);
//   }
   
// print();
// print1(1);
// print2(1,2);
// print3(1,2,3);

// let names=["Luffy", "Zoro", "Shanks", "Roger"]
// let names1=["Sanji", "Law", "Kid"]
// let names2=[...names,...names1];
// console.log(names2);

// let anime={
//     name:"One Piece",
//     crewName: "StrawHats Crew",
//     purpose: "Finding One piece"
// }
// let otherAnime={
//     name1:"Naruto",
//     genre: "Action"
// }
// let newAnime={...anime,...otherAnime};
// console.log(newAnime);

// let names=["Luffy", "Zoro", "Shanks", "Roger"]
// let [name1,,name3]=names;
// console.log(name1,name3);

// let anime={
//     name:"One piece",
//     genre:"Action, Adventure",
//     startDate:1999
// }
// let {name,genre}=anime;
// console.log(name,genre);

// let names=["Luffy", "Zoro", "Shanks", "Roger"]
// var name=([name])=> console.log(name);
// name(names);
// let anime={
//     name:"One piece",
//     genre:"Action, Adventure",
//     startDate:1999
// }
// var name1=({name})=> console.log(name);
// name1(anime);
// let names=["Luffy", "Zoro", "Shanks", "Roger"]
// let anime={
//     name:"One piece",
//     genre:"Action, Adventure",
//     startDate:1999
// }
// let anime2={
//     name:"Naruto",
//     genre:"Action, Adventure",
//     startDate:2004
// }

// let {name:a}=anime;
// let {name:b}=anime2;
// console.log(a,b);

// const num={
//     "first":10,
//     "second":20
// }
// function add(a,b){
//     console.log(num[a]+num[b]);
// }
// add("first","second");

// var hello=(hello2)=>{ 
//     console.log("Hi");
//     hello2();
//     console.log("Hello");
// }
// var hello2=()=>{console.log("Hi again");}
// hello(hello2);
// setTimeout(()=>{console.log("timeout"),10000});
// console.log("Timeout function");


// let isEligible=(age)=>{
//     return new Promise((eligible,notEligible)=>{
//         if(age>=18){
//             eligible();
//         }
//         else{
//             notEligible();
//         }
//     })
// }
// isEligible(22).then(()=>{console.log("Eligible");},()=>{console.log("Not Eligible");})

// class Account{
//     constructor(name,phoneNo){
//         this.name=name
//         this.phoneNo=phoneNo
//     }
//     getStatus(){
//         console.log("Account Successfuly created");
//     }
// }
// let acc1=new Account("Eshwar",12345);
// acc1.getStatus();
// class AccountUtilities extends Account{
//     constructor(name,phoneNo,email){
//         super(name,phoneNo);
//         this.email=email;
//     }
//     getDetails(){
//         console.log(this.name,this.phoneNo,this.email);
//     }
// }
// let acc2=new AccountUtilities("Vam",1234,"v@g.c");
// acc2.getDetails();
// acc1.getStatus();

let arr = [1, 2, 3, 4, 5, 6];
 
let new_arr = arr.map((i) => i + 1);
console.log(new_arr);

let new_arr2 = arr.filter((i) => i %2==1);
console.log(new_arr2);