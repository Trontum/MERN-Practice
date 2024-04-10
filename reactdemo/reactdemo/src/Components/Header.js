import { Link } from "react-router-dom";
// import images from "./images.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Header=()=>{
    const handleClick=()=>{
      setLogin(!login);
    }
    const [login,setLogin]=useState(true);
    useEffect(()=>{
      console.log("Keeps on rendering");
  });
  useEffect(()=>{
      console.log("Renders only once");
  },[]);
  useEffect(()=>{
      console.log("when changed");
  },[login]);
  const itemCount1=useSelector((store)=>store.cart.items1);
  const itemCount2=useSelector((store)=>store.cart.items2);
    return <div >
        {/* <h1>Header Component</h1>
        <button classNameName="btn btn-success">Click Me</button> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a style={{marginLeft:"10px"}} className="navbar-brand text-light" href="..">Anime</a>
        <img style={{borderRadius:"20%"}} width="50px" height="50px" src="../images.png" alt="foodlogo" ></img>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="..navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/cakes">Cakes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/carousel">Carousel</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/conditionals">Conditionals </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/support">Support </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/products">Products </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/users">Users </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/cart"> Items : {itemCount1.length+itemCount2.length} </Link>
      </li>
      {/* <button onClick={handleClick} className="btn btn-info">{login?<p>Logout</p>:<p>Login</p>}</button> */}

      <button onClick={handleClick} className="btn btn-info">{login?"Logout":"Login"}</button>

      {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle text-light" to="" role="button" data-toggle="dropdown" aria-expanded="false">
          Cusines
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="..">Indian</a>
          <a className="dropdown-item" href="..">Chinese</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="..">Italian</a>
        </div> */}
    </ul>
  </div>
</nav>
    </div>
}

export default Header;