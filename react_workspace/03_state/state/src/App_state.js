import React, { Component } from 'react';
import Counter1 from './Counter1'
import Counter2 from './Counter2'

class App extends Component {
    render() {
        return (
            <div>
                Counter 1 : <Counter1 />
                Counter 2 : <Counter2 />
            </div>
        );
    }
}

export default App;