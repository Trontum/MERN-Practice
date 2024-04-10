export default function Button(props) {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{props.incanddec(props.value,props.operation)}}>
            {props.operation} by {props.value}</button>
    </div>
  )
}
