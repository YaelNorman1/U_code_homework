import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

handleInputChang=(event) =>{
    if (event.target.id === "select-input"){
        const fruit= event.target.value;
        this.setState({[event.target.name] : fruit})

    }
    else if (event.target.id === "name-input"){
        this.setState({[event.target.name] : event.target.value})
    }

}

render() {
    return (
        <div>
            <input id="name-input"  name='name' value={this.state.name} onChange={this.handleInputChang}/>
            <select id="select-input" name='fruit' value={this.state.fruit} onChange={this.handleInputChang}>
                <option>Apple</option>
                <option>Orange</option>
                <option>Banana</option>
            </select>
        </div>
    );
}
}

export default Exercise2;