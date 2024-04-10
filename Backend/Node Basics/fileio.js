// const fs=require("fs");
// const content=fs.readFileSync("./server.js");
// console.log(content.toString());
// fs.writeFileSync("notes.txt","NodJS File System Code");
const empData=require("./employeeDetails.json");
// console.log(empData);
const prompt=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
prompt.question("Enter Employee ID : ",(id)=>{
    // empData.forEach((data)=>{
    //     if(data.empid==id){
    //         console.log("Name :",data.ename,"Project :",data.project);
    //     }
    // })
    let emp=empData.find((element)=>element.empid==id)
    if(emp)
    console.log("Name :",emp.ename,"Project :",emp.project);
    else
    console.log("Employee Not Found!");
    prompt.close();
})


