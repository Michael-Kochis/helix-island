import React, { Component } from "react";

const clickHandler = () => {
    console.log('Button Clicked')
}

class FunctionClick extends Component {
    render() {
        return (
            <div>
                <button onClick={clickHandler} >Click Me </button>
            </div>
        )
    }
}

export default FunctionClick;