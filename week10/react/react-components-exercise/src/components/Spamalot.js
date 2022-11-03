import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){

        let spamList=[];
        for (let i=0; i<500; i++){
            spamList.append(<Spam />)
        }
        return (<div>spamList</div>);
    }
}

export default Spamalot

