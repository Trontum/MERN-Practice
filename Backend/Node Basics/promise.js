const checkEligibility=(age)=>{
    return new Promise ((resolve,reject)=>{
        if(age>=18) resolve("Eligile");
        else reject("Not Eligible");
    })
}
const token=()=>{
    return new Promise ((resolve,reject)=>{
        resolve(Math.round(Math.random()*1000));
    })
}
// checkEligibility(22)
// .then((status)=>console.log(status))
// .then(token)
// .then((token)=>console.log(token))
// .catch((status)=>console.log(status))
// .finally(()=>console.log("Check is done"))
const fun=async()=>{
    try{
        let tokenNumber=await token();
        console.log(tokenNumber);
    }
    catch(error){
        console.log(error);
    }
}
fun();