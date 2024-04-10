// import images from "./images.png"
import axios from "axios";
import { useEffect, useState } from "react";
const Home=(props)=>{
    let [books,setBooks]=useState([]);
    let [query,setQuery]=useState("");
    let [query2,setQuery2]=useState("");
    let [title,setTitle]=useState("");
    let [category,setCategory]=useState("");
    let [price,setPrice]=useState("");
    const handleForm=(e)=>{
        e.preventDefault();
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/booksMongodb/list/all")
        .then((res)=>setBooks(res.data.data))
        .catch((error)=>console.log(error))
    },[])
    const handleQuery=(e)=>{
        setQuery(e.target.value);
    }
    const handleQuery2=(e)=>{
        setQuery2(e.target.value);
    }
    const handlePrice=(e)=>{
        setPrice(e.target.value);
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleCategory=(e)=>{
        setCategory(e.target.value);
    }
    const handleSearchByTitle=()=>{
        axios.get("http://localhost:5000/booksMongodb/details/"+query)
        .then((res)=>setBooks(res.data.data))
        .catch((error)=>{console.log(error);alert("Book not found check the title");})
    }
    const handleSearchByCategory=()=>{
        axios.get("http://localhost:5000/booksMongodb/list?category="+query)
        .then((res)=>setBooks(res.data.data))
        .catch((error)=>{console.log(error);alert("Book not found check the category");})
    }
    const handleAddBook=()=>{
        axios.post("http://localhost:5000/booksMongodb/add",{title,category})
        .then((res)=>{
            if(res.status===200){
                alert("hello")
                axios.get("http://localhost:5000/booksMongodb/list/all")
                .then((res)=>setBooks(res.data.data))
                .catch((error)=>console.log(error))
            }
        })
        .catch((error)=>console.log(error))
    }
    const handleDeleteBook=()=>{
        axios.delete("http://localhost:5000/booksMongodb/delete/"+query)
        .then((res)=>{
            if(res.status===200){
                axios.get("http://localhost:5000/booksMongodb/list/all")
                .then((res)=>setBooks(res.data.data))
                .catch((error)=>console.log(error))
            }
            else alert("Book delete is unsuccessful , enter the correct details");
        })
        .catch((error)=>{alert("Book Delete is unsuccessful , enter the correct details");console.log(error);})
    }
    const handleUpdateBook=()=>{
        axios.put("http://localhost:5000/booksMongodb/update/"+query2+"?price="+price)
        .then((res)=>{
            if(res.status===200) {
                axios.get("http://localhost:5000/booksMongodb/list/all")
                .then((res)=>setBooks(res.data.data))
                .catch((error)=>console.log(error))
                alert("price updated successfully");
            }
            else alert("Book Update is unsuccessful , enter the correct details");
        })
        .catch((error)=>{alert("Book Update is unsuccessful , enter the correct details");console.log(error);})
    }
    let block=books.map(book=> <div key={book.title}
        style={{display:'inline-block',verticalAlign:'top',margin:'20px',
          width:'220px',height:'210px',border:'1px solid blue',
          textAlign:'center',padding:'5px'}}>
             <img src={book.thumbnailUrl} alt={book.title} height={150} width={150}/>
             <p>{book.title}</p>
             </div>)
    return <div className="container">
        <form onSubmit={handleForm} className="form">
        <input onChange={handleQuery} type="text" value={query}></input>
        <button style= {{margin:"19px"}} className="btn btn-success" onClick={handleSearchByTitle}>Search by title</button>
        <button  style= {{margin:"19px"}} className="btn btn-success" onClick={handleSearchByCategory}>Search by category</button>
        <button  style= {{margin:"19px"}} className="btn btn-danger" onClick={handleDeleteBook}>Delete Book</button>
        <br></br>
        <h3>Add Book</h3>
        <label>Title of the book</label>
        <input onChange={handleTitle} type="text" placeholder="enter the book title" value={title}></input>
        <label>Category of the book</label>
        <input onChange={handleCategory} type="text" placeholder="enter the book Category" value={category}></input>
        <button style= {{margin:"19px"}} className="btn btn-info" onClick={handleAddBook}>Add Book</button>
        <br></br>
        <h3>Update Book</h3>
        <input onChange={handleQuery2} type="text" value={query2}></input>
        <input onChange={handlePrice} type="text" placeholder="enter the price" value={price}></input>
        <button style= {{margin:"19px"}} className="btn btn-primary" onClick={handleUpdateBook}>Update Price</button>
        </form>
        {block}
        {/* <div style={{background:"url(./images.png)", height:"400px"}}></div> */}
        {/* <h3 >
            Name : {props.name}
        </h3>
        <br/>
        <h3>
            Phone Number : {props.phoneNo}
        </h3>
        <br/>
        <h3>
            Email : {props.email}
        </h3>
        <br/>
        <h3>
            City : {props.city}
        </h3>
        <br/>
        <h3>
            Stream : {props.stream}
        </h3>
        <br/> */}
    </div>
}
export default Home;