import TableRow from "./TableRow"

export default function EmployeeDetails() {
    let employees=[{
        name:"Emp1",
        phoneNo:"123",
        empId:"E1",
        rating:"4.8"
    },
    {
        name:"Emp2",
        phoneNo:"1235",
        empId:"E2",
        rating:"4.7"
    },
    {
        name:"Emp3",
        phoneNo:"1234",
        empId:"E3",
        rating:"4.5"
    }]
  return (
    <div>
        <h1>Employee Details</h1>
        <table class="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Employee ID</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
    {employees.map((i,index)=>(
        <TableRow employee={i} key={index}/>
    ))}
  </tbody>
</table>
    </div>
  )
}
