import CakeCard from "./CakeCard";
// import image from "/public/image 3/image";

const CakeGallary=()=>{
let cakes = [

    {

      name: "Chocolate Truffle",

      image: "cake1.jpg",

      price: 700,

      cakeid: 1,

    },

    {

      name: "White Truffle",

      image: "cake2.jpg",

      price: 600,

      cakeid: 2,

    },

    {

      name: "Coffee cake",

      image: "cake5.jpg",

      price: 700,

      cakeid: 3,

    },

    {

      name: "White Truffle",

      image: "cake4.jpg",

      price: 600,

      cakeid: 4,

    },

    {

      name: "Chocolate Truffle",

      image: "cake3.jpg",

      price: 700,

      cakeid: 5,

    },

    {

      name: "White Truffle",

      image: "cake1.jpg",

      price: 600,

      cakeid: 6,

    },

    {

      name: "Chocolate Truffle",

      image: "cake5.jpg",

      price: 700,

      cakeid: 7,

    },

    {

      name: "White Truffle",

      image: "cake4.jpg",

      price: 600,

      cakeid: 8,

    },

    {

      name: "Chocolate Truffle",

      image: "cake1.jpg",

      price: 700,

      cakeid: 9,

    },

    {

      name: "White Truffle",

      image: "cake2.jpg",

      price: 600,

      cakeid: 10,

    },

    {

      name: "Chocolate Truffle",

      image: "cake1.jpg",

      price: 700,

      cakeid: 11,

    },

    {

      name: "White Truffle",

      image: "cake2.jpg",

      price: 600,

      cakeid: 12,

    },

    {

      name: "Chocolate Truffle",

      image: "cake5.jpg",

      price: 700,

      cakeid: 13,

    },

    {

      name: "White Truffle",

      image: "cake4.jpg",

      price: 600,

      cakeid: 14,

    },

    {

      name: "Chocolate Truffle",

      image: "cake3.jpg",

      price: 700,

      cakeid: 15,

    },

    {

      name: "White Truffle",

      image: "cake1.jpg",

      price: 600,

      cakeid: 16,

    },

    {

      name: "Chocolate Truffle",

      image: "cake5.jpg",

      price: 700,

      cakeid: 17,

    },

    {

      name: "White Truffle",

      image: "cake4.jpg",

      price: 600,

      cakeid: 18,

    },

    {

      name: "Chocolate Truffle",

      image: "cake1.jpg",

      price: 700,

      cakeid: 19,

    },

    {

      name: "White Truffle",

      image: "cake2.jpg",

      price: 600,

      cakeid: 20,

    },

  ]
  return <div>
    <div style={{ display:"flex", flexWrap:"wrap",justifyContent:"center" }}>
  {cakes.map((cake)=>
    <CakeCard key={cake.cakeid} cake={cake} />
    )}</div></div>
 
}
export default CakeGallary;