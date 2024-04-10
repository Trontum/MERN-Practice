
export default function TableRow(props) {
  return (
    <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.phoneNo}</td>
        <td>{props.employee.empId}</td>
        <td>{props.employee.rating}</td>
    </tr>
  )
}
