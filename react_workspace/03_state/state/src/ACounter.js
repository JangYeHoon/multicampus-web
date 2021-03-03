import React, { Component } from 'react';

class ACounter extends Component {
    render() {
        const {count, increase, decrease} = this.props;
        return (
            <div>
                <h1> Count : {count}</h1>
                <button onClick={increase}> + </button>
                <button onClick={decrease}> - </button>
            </div>
        );
    }
}

export default ACounter;