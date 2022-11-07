import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    handleInputChang= (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    alartMsg= ()=>{
        alert(this.state.name +this.state.age)
    }

    render() {
        return (
            <div>
                <input id="name-input" name='name' value={this.state.name} onChange={this.handleInputChang}/>
                <input id="age-input" name='age' value={this.state.age} onChange={this.handleInputChang}/>
                <button onClick={this.alartMsg}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;