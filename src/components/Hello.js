import React from "react";
import Greeting from "./Greeting";

const Hello = props => {
    return (
        <Greeting namae={props.namae} message="Hello" />
    )
}

export default Hello;