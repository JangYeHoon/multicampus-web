import React, { Component } from 'react';

class Counter1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            fixCount : 100,
        }
    }

    increase = () => {
        this.setState(
            {
                count : this.state.count + 1,
            }
        );
    }

    decrease = () => {
        this.setState({
            count : this.state.count - 1,
        });
    }

    render() {
        return (
            <div>
                <h1> Counter : {this.state.count}</h1>
                <button onClick={this.increase}> + </button>
                <button onClick={this.decrease}> - </button>
            </div>
        );
    }
}

export default Counter1;