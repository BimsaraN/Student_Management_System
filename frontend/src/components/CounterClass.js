/* eslint-disable no-useless-constructor */
//Import React From Library
import React from "react";

class CounterClass extends React.Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this)
        this.state = {
            number: 0
        }
    }

    increment() {
        this.setState({
            number: this.state.number + 1
            //number: ++this.state.number
        })
    }

    render() {
        return(
            <div>
                <h3>Classbase Component</h3>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Implement</button>
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;