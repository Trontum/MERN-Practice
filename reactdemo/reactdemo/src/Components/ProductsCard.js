import { useDispatch } from "react-redux"
import { addItem1 } from "../Stores/CartSlice";

export const ProductsCard = (props) => {

    const dispatch=useDispatch();
    const handleClick=(item)=>{
        dispatch(addItem1(item));
        // console.log(item);
    }
  return (
    <div className="card" style={{ margin:"5px",width:"300px",height:"500px",alignItems:"center"}}>
    <img src={props.product.image} className="card-img-top" alt="..." style={{width: "300px", height:"300px"}}/>
    <div className="card-body" style={{alignItems:"center"}}>
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.price}</p>
        {/* <p className="card-text">{props.product.rating}</p> */}
        <button onClick={()=>{handleClick(props.product)}} className="btn btn-primary">Add Item</button>
    </div>
</div>
  )
}
