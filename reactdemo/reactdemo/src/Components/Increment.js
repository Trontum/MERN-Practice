import { useState } from "react";
import Button from "./Button";
const Increment=()=>{
    
    let [number,setNumber]=useState(0);
    const incanddec=(value,operation)=>{
        if(operation==="inc"){
            setNumber(number+value);
        }
        else{
            setNumber(number-value);
        }
    }
    
    return <div>
        <h1>Number : {number}</h1>
        <Button value={50} operation="inc" incanddec={incanddec}  />
        <Button value={100} operation="inc" incanddec={incanddec}  />
        <Button value={50} operation="dec" incanddec={incanddec}  />
        <Button value={100} operation="dec" incanddec={incanddec}  />
        {/* <button className="btn btn-primary" onClick={()=>{incanddec(50,"inc")}}>Increment By 50</button>
        <button className="btn btn-success" onClick={()=>{incanddec(100,"inc")}}>Increment By 100</button>
        <button className="btn btn-info" onClick={()=>{incanddec(50,"dec")}}>Decrement By 50</button>
        <button className="btn btn-danger" onClick={()=>{incanddec(100,"dec")}}>Decrement By 100</button> */}
    </div>
}
export default Increment;