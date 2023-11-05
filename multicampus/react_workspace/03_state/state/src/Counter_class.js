import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            localCount : 0,
        }
    }

    onIncrease = () => {
        this.setState({
            localCount : this.state.localCount + 1,
        });
    }

    onDecrease = () => {
        this.setState({
            localCount : this.state.localCount - 1,
        });
    }

    render() {
        const {count, increase, decrease} = this.props;
        return (
            <div>
                <h1> Count : {count}</h1>
                <button onClick={increase}> + </button>
                <button onClick={decrease}> - </button>
                <hr/>
                <h1> LocalCount : {this.state.localCount}</h1>
                <button onClick={this.onIncrease}> + </button>
                <button onClick={this.onDecrease}> - </button>
            </div>
        );
    }
}

export default Counter;