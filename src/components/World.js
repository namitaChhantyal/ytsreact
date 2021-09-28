import React, {Component} from "react";

class World extends Component{
    state={
        color:'red',
        change:11
    }
    num2 = 15;

    changeVar =(val) =>{
        this.setState({
            change:30
        });
    }

    render(){
        const num3 = 16;
        return(
            <h1 className="random">
                ================
                <h1>Num2:{this.state.color}{this.num2}</h1>
                <h2>State Variable: {this.state.change}</h2>
                <br/>
                this is the world {num3}

                <button onClick={()=>this.changeVar('test')}>
                    Click to change variable
                </button>
            </h1>
        );
    }
}
export default World;