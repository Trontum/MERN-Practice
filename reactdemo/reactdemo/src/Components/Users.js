import { useEffect, useState } from "react"
import axios from "axios";
import TableRow2 from "./TableRow2";

const Users = () => {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users")
        .then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div>
        <h1>User Details</h1>
        <table class="table table-dark table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>(
        <TableRow2 user={user} key={user.id}/>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Users