import { useDispatch, useSelector } from "react-redux"
import { ProductsCard } from "./ProductsCard";
import { clearCart } from "../Stores/CartSlice";
// import Card from "./Card";
import CakeCard from "./CakeCard";
// import { useState } from "react";

const Cart = () => {
    const items1=useSelector((store)=>store.cart.items1);
    const items2=useSelector((store)=>store.cart.items2);
    const totalAmount=useSelector((store)=>store.cart.totalPrice);
    console.log(items2)
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(clearCart());
    }
  return (
    <div className="container">
        <button onClick={handleClick} className="btn btn-info" >Clear Cart</button>
        {items1.length+items2.length===0 ? <h3>The Cart is empty.</h3>:<h3>The Cart Total is : <span className="h3 text-success">{totalAmount.toFixed(3)}</span></h3>}
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {items1.map((product)=>{
            return <ProductsCard key={product.id} product={product} />
        })}
        {items2.map((product)=>{
            return <CakeCard key={product.cakeid} cake={product} />
        })}
                </div>
    </div>
  )
}

export default Cart;