import { Component } from "react";
class ClassComponent extends Component{
    constructor(){
        super();
        this.state={
            name:"Eshwar",
            place:"Hyderabad"
        }
    }
    changeName=()=>{
        this.setState({name:"Eshwar Reddy"});
    }
    changePlace=()=>{
        this.setState({place:"Mumbai"});
    }
    // componentWillMount(){
    //     console.log("Before Rendering");
    // }
    // componentDidMount(){
    //     console.log("After Rendering");
    // }
    // componentDidUpdate(){
    //     console.log("After Updating");
    // }
    // componentWillUnmount(){
    //     console.log("Before Leaving component");
    // }
    render(){
        return <div>
            {/* {console.log("During rendering")}; */}
            <h1>Name : {this.state.name}</h1>
            <button className="btn btn-success" onClick={this.changeName} >Change Name</button>
            <h1>Place : {this.state.place}</h1>
            <button className="btn btn-primary" onClick={this.changePlace} >Change Place</button>
        {/* <h4>
            Name: {this.props.name}
        </h4>
        <h4>
            Phone Number: {this.props.phoneNo}
        </h4>
        <h4>
            Email: {this.props.email}
        </h4>
        <h4>
            City: {this.props.city}
        </h4>
        <h4>
            Stream: {this.props.stream}
        </h4> */}


        </div>
    }
}
export default ClassComponent;