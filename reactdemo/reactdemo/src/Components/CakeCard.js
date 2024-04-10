import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem2 } from "../Stores/CartSlice";

const CakeCard=(props)=>{
    const dispatch=useDispatch();
    const handleClick=(item)=>{
        dispatch(addItem2(item));
        // console.log(item);
    }
    return <div>
    <div className="card" style={{ margin:"5px", height:"500px",width:"300px",alignItems:"center"}}>
        <Link to={"/cakes/"+props.cake.cakeid+"/"+props.cake.image}><img src={`/images/image/${props.cake.image}`} className="card-img-top" alt="..." style={{width: "300px", height:"300px"}}/></Link>
        <div className="card-body">

            
            <h5 className="card-title">{props.cake.name}</h5>
            <p className="card-text">{props.cake.price}</p>
            {/* <p className="card-text">{props.cake.rating}</p> */}
            <button onClick={()=>handleClick(props.cake)} className="btn btn-primary">Add to Cart</button>
        </div>
    </div>
    </div>
}


export default CakeCard;