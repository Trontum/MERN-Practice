
export default function RestaurantInfo(props) {
  if (props.RestaurantName==="Autumn Leaf Cafe" || props.RestaurantName==="Swiss Castle" || props.RestaurantName==="Pista House"){
    return <h2>{props.RestaurantName} is a dummy restaurant.</h2>
  }
  else{
    return <h2>Data not available</h2>
  }
}
