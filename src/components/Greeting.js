import React, { Component } from "react";

class Greeting extends Component {
    render() {
        const {message, namae} = this.props;
        return (
            <h1 className="greeting">{message}, {namae}</h1>        
        )
    }
}

export default Greeting;