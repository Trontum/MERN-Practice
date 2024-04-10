import React, { useRef, useState } from 'react'
import axios from "axios"
const Forms = () => {
    // let [email,setEmail]=useState("");
    // let [number,setNumber]=useState("");
    let [library,setLibrary]=useState("");
    let [tool,setTool]=useState([]);
    let name=useRef();
    let emailu=useRef();
    let [d1,setD1]=useState("");
    let [d5,setD5]=useState("");
    let [d4,setD4]=useState("");
    let [d3,setD3]=useState("");
    let [d2,setD2]=useState("");
    let [details,setDetails]=useState({})
    // const handleEmail=(e)=>{
    //     setEmail(e.target.value);
    // }
    // const handleNumber=(e)=>{
    //     setNumber(e.target.value);
    // }
    const handleRadio=(e)=>{
        setLibrary(e.target.value);
    }
    const handleCheck=(e)=>{
        console.log(e.target.checked);
        if(e.target.checked){
            setTool([...tool,e.target.value]);
        }
        else{
            setTool(tool.filter((tool)=>{return tool!==e.target.value}));
        }
    }
    const handle1=(e)=>{
      setD1(e.target.value);
    }
    const handle2=(e)=>{
      setD2(e.target.value);
    }
    const handle3=(e)=>{
      setD3(e.target.value);
    }
    const handle4=(e)=>{
      setD4(e.target.value);
    }
    const handle5=(e)=>{
      setD5(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newDetails={
          title:d1,
          price:d2,
          description:d3,
          image:d4,
          category:d5
        }
        setDetails({...newDetails});
        // console.log(newDetails);
        // console.log(details);
        axios.post("https://fakestoreapi.com/products",details)
        .then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        });
        // console.log(name.current.value+" "+emailu.current.value);
        // console.log(name+" "+emailu);
    }
  return (
    <div className='container'><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Title : </label>
      <input onChange={handle1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Price : </label>
      <input onChange={handle2} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Description : </label>
      <input onChange={handle3} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Image url</label>
      <input onChange={handle4} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Category</label>
      <input onChange={handle5} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    
    <h3>Library - {library}</h3>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="ReactJS" onChange={handleRadio}/>
  <label class="form-check-label" for="flexRadioDefault1">
    ReactJS
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="AngularJS" onChange={handleRadio}/>
  <label class="form-check-label" for="flexRadioDefault2">
    AngularJS
  </label>
</div>
<h3>Tools - {tool.join("-")}</h3>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="MongoDB" onChange={handleCheck}/>
  <label class="form-check-label" for="inlineCheckbox1">MongoDB</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="ExpressJS" onChange={handleCheck}/>
  <label class="form-check-label" for="inlineCheckbox2">ExpressJS</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="ReactJS" onChange={handleCheck}/>
  <label class="form-check-label" for="inlineCheckbox3">ReactJS</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="NodeJS" onChange={handleCheck}/>
  <label class="form-check-label" for="inlineCheckbox3">NodeJS</label>
</div>
<div className="mb-3">
      <label for="exampleInputEmail1" className="form-label" >Email address : </label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailu}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label" >Name : </label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={name}/>
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  
  )
}

export default Forms