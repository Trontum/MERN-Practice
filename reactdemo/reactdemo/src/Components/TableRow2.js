
const TableRow2 = (props) => {
  return (
    <tr>
        <td>{props.user.name.firstname+" "+props.user.name.lastname}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.email}</td>
        <td>{props.user.address.city}</td>
        {/* <td>{props.user.rating}</td> */}
    </tr>
  )
}

export default TableRow2