import { useParams } from "react-router-dom"

export default function CardPage() {
    const params=useParams();
    // console.log(params);
  return (
    <div>
        <img width="400px" height="400px" src={"/images/image/"+params.img} alt="cake"></img>
        <h3>ID: {params.id}</h3>
    </div>
  )
}
