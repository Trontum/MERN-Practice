import { useEffect, useState } from "react"
import { ProductsCard } from "./ProductsCard";
import axios from "axios";
export const Products = (props) => {
    let [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setProducts(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    if(products.length===0){
        return (
            <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    else{
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {products.map((product)=>{
            return <ProductsCard key={product.id} product={product} />
        })}
                </div>
  )}
}
