import React, { Component } from "react";

class BeastList extends Component {
    constructor(props) {
        super(props)
        this.bName = [ 
            [1, "Bruce"], 
            [2, "Clark"], 
            [3, "Diana"],
            [4, "John"]
        ];
    }
    render() {
        return (
            <div>
                {
                    this.bName.map(critter => <h2 key={critter[0]}>{critter[1]}</h2>)
                }
            </div>
        )
    }
}

export default BeastList;