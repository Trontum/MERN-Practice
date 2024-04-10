
export default function Conditionals() {
    let stream="MERN";
    let login=true;
    if(stream==="MERN"){
        return(
            <div>
                <h1>Welcome to MERN Training </h1>
                {(login)? <h2>You have logged in</h2>: <h2>Please Login</h2>}
                {login && (<h3>Welcome Eshwar</h3>)} 
            </div>
        )
    }
    else{
        return <div>
            <h1>You have landed on a wrong course</h1>
        </div>
    }
}
