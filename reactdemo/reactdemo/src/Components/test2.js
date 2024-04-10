// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// const Header = () => {
//   const [login, setLogin] = useState("Login");

//   const loginHandler = () => {
//     //    if(login === "Login"){
//     //     setLogin("Logout")
//     //    }
//     //    else{
//     //     setLogin("Login")
//     //    }
//     login === "Login" ? setLogin("Logout") : setLogin("Login");
//   };

//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <nav class="navbar navbar-light" style={{ background: "#e3f2fd" }}>
//       <div class="container">
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <a class="navbar-brand" href="..">
//             <img
//               style={{ height: "3rem" }}
//               alt=".."
//               src="https://th.bing.com/th/id/OIP.BMceUSePdpWYKKi4dwML9AHaEK?pid=ImgDet&rs=1"
//             />
//           </a>
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <Link class="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/cakeGallery">
//                 Cake Gallery
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/classcomp">
//                 Class Component
//               </Link>
//             </li>

//             <li class="nav-item">
//               <Link class="nav-link" to="/restaurant">
//                 Restaurants
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/increement">
//                 Increement
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/conditional">
//                 Conditional
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/support">
//                 Contact Us
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/lifecycle">
//                 LifeCycle
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/products">
//                 Products
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/forms">
//                 Form
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/cart">
//                 Cart - {cartItems.length} Items
//               </Link>
//             </li>
//             <li className="nav-item">
//               <button onClick={loginHandler} className="btn btn-primary">
//                 {login}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default Header;