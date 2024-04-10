
const mongoose=require("mongoose");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoDatabase');
    console.log("Database is connected successfully");
  }
  main().catch((error)=>console.log(error));
let employeeScheme=new mongoose.Schema({
    empname:String,
    empid:Number,
    project:String,
    skills:Array
},{collection:"Employees"})

const Employees=new mongoose.model("Employees",employeeScheme);
let emp=new Employees({
    empname:"e1",
    empid:991,
    project:"MERN",
    skills:["MERN"]
})

emp.save()
.then((status)=>console.log(status))
.catch(error=>console.log(error))
.finally(()=>mongoose.disconnect())



