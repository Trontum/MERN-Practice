// const f1=()=>{
//     console.log("First");
// }
// const f2=()=>{
//     let i=1;
//     while(i<1e9) i++
//     console.log("Second");
//     // setTimeout(()=>{console.log("Async call")},10000);

// }
// const f3=()=>{
//     console.log("Third");
// }
// f1();
// f2();
// f3();

const fun=(name,callback)=>{
    if(name==="Eshwar") callback(true,"Valid Name");
    else callback(false,"Invalid Name");
}
fun("Eshwr",(isValid,status)=>{
    if(isValid) console.log(status);
    else console.log(isValid);
})