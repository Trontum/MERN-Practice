// var employee={
//     name: "Eshwar",
//     employeeId: "13769318",
//     salary: "30000",
//     designation:"ASE",
//     getEmployeeDetails: function(){
//         console.log("Name : "+this.name);
//         console.log("EmployeeID : "+this.employeeId);
//         console.log("Salary : "+this.salary);
//         console.log("Designation : "+this.designation);
//     }
// }
// employee.getEmployeeDetails();

// var employee=new Object();
// employee.name="Eshwar";
// employee.employeeId="13769318";
// employee.salary="30000";
// employee.designation="ASE";
// employee.getEmployeeDetails=function(){
//     console.log("Name : "+this.name);
//     console.log("EmployeeID : "+this.employeeId);
//     console.log("Salary : "+this.salary);
//     console.log("Designation : "+this.designation);
// };
// employee.getEmployeeDetails();


// function employee(name,empId,salary,designation){
//     this.name=name;
//     this.employeeId=empId;
//     this.salary=salary;
//     this.designation=designation;
//     this.getEmployeeDetails=function(){
//         console.log("Name : "+this.name);
//         console.log("EmployeeID : "+this.employeeId);
//         console.log("Salary : "+this.salary);
//         console.log("Designation : "+this.designation);
//     }
// }

// var emp1=new employee("Eshwar","101","200000","SDE");
// var emp2=new employee("Vamshi","102","30000","ASE");
// var emp3=new employee("Gopi","103","40000","Data Analyst");
// var emp4=new employee("Divyendra","104","50000","SE");
// var emp5=new employee("Dilip","105","30000","ASE");

// emp1.getEmployeeDetails();
// emp2.getEmployeeDetails();
// emp3.getEmployeeDetails();
// emp4.getEmployeeDetails();
// emp5.getEmployeeDetails();


// // Object Literal
// var product1={
//     name:"Sony PS5",
//     price:"50000",
//     description:"A Gaming Console",
//     color:"White",
//     getProductDetails:function(){
//         console.log("Name : "+this.name);
//         console.log("Price : "+this.price);
//         console.log("Description : "+this.description);
//         console.log("Color : "+this.color);
//     }
// }
// var product2={
//     name:"Iphone 15",
//     price:"100000",
//     description:"An IOS mobile phone",
//     color:"mat black",
//     getProductDetails:function(){
//         console.log("Name : "+this.name);
//         console.log("Price : "+this.price);
//         console.log("Description : "+this.description);
//         console.log("Color : "+this.color);
//     }
// }
// var product3={
//     name:"Sony Bravia 105 Inch TV",
//     price:"700000",
//     description:"Android Qled TV",
//     color:"black",
//     getProductDetails:function(){
//         console.log("Name : "+this.name);
//         console.log("Price : "+this.price);
//         console.log("Description : "+this.description);
//         console.log("Color : "+this.color);
//     }
// }


// // Object Constructor
// var product4=new Object();
// product4.name="Sony PS5";
// product4.price="50000";
// product4.description="A Gaming Console";
// product4.color="White";
// product4.getProductDetails=function(){
//     console.log("Name : "+this.name);
//     console.log("Price : "+this.price);
//     console.log("Description : "+this.description);
//     console.log("Color : "+this.color);
// }
// var product5=new Object();
// product5.name="Iphone 15";
// product5.price="100000";
// product5.description="An IOS Mobile Phone";
// product5.color="Mat Black";
// product5.getProductDetails=function(){
//     console.log("Name : "+this.name);
//     console.log("Price : "+this.price);
//     console.log("Description : "+this.description);
//     console.log("Color : "+this.color);
// }
// var product6=new Object();
// product6.name="Sony Bravia 105 Inch TV";
// product6.price="700000";
// product6.description="Android QLED TV";
// product6.color="Black";
// product6.getProductDetails=function(){
//     console.log("Name : "+this.name);
//     console.log("Price : "+this.price);
//     console.log("Description : "+this.description);
//     console.log("Color : "+this.color);
// }

// // Object Function Constructor
// function product(name,price,description,color){
//     this.name=name;
//     this.price=price;
//     this.description=description;
//     this.color=color;
//     this.getProductDetails=function(){
//         console.log("Name : "+this.name);
//         console.log("Price : "+this.price);
//         console.log("Description : "+this.description);
//         console.log("Color : "+this.color);
//     }
// }
// var product7=new product("Sony PS5","50000","A Gaming Console","White");
// var product8=new product("Iphone 15","100000","An IOS Mobile Phone","Mat Black");
// var product9=new product("Sony Bravia 105 Inch TV","7000000","Black");

// product1.getProductDetails();
// product2.getProductDetails();
// product3.getProductDetails();
// product4.getProductDetails();
// product5.getProductDetails();
// product6.getProductDetails();
// product7.getProductDetails();
// product8.getProductDetails();
// product9.getProductDetails();

function technologyStack(){};
technologyStack.prototype.getTechnologyStack=function(){
    console.log("MongoDB, ExpressJS, ReactJS, NodeJS");
}
function fullstack(){};
fullstack.prototype=new technologyStack();
fullstack.prototype.getStackName=function(){
    console.log("MERN");
}

var techstackInfo=new fullstack();

techstackInfo.getStackName();
techstackInfo.getTechnologyStack();
