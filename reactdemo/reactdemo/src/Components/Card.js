

const Card=(props)=>{
            return <div>
                <div className="card" style={{ margin:"5px"}}>
                    <img src={props.restaurant.image} className="card-img-top" alt="..." style={{width: "250px", height:"300px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.restaurant.name}</h5>
                        <p className="card-text">{props.restaurant.cuisine}</p>
                        <p className="card-text">{props.restaurant.rating}</p>
                        <button  href=".." className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                </div>
}
export const DiscountCard=(Card)=>{
    return (props)=>{
        return (
            <div><h3>Discount : {props.restaurant.discount}%</h3>
            <Card {...props}/>
            </div>
            
        )
    }
}
export default Card;