// import React, { Component } from 'react';
import React, {useState} from 'react';
import Counter from './Counter'
import ACounter from './ACounter'

// State Hook을 사용한 function component
function App() {
  // 변경 데이터 state 선언
  const [count, setCount] = useState(0);
  return (
    <div className="App">
         Counter 1 : <Counter count={count}
                increase={() => setCount(count + 1)}
                decrease={() => setCount(count - 1)}/>
         Counter 2 : <ACounter count={count}
                increase={() => setCount(count + 1)}
                decrease={() => setCount(count - 1)}/>
    </div>
  );
}

// class App extends Component {
//   // 변경 데이터는 state를 사용
//   // 변경 데이터 state 초기화 - constructor
//   constructor(props){
//     super(props);
//     this.state = {
//       count : 0,
//     }
//   }

//   onIncrease = () => {
//     // state data 변경은 - setState()
//     // this.state.count += 1 - error
//     this.setState({
//       count : this.state.count + 1,
//     });
//   }

//   onDecrease = () => {
//     this.setState({
//       count : this.state.count - 1,
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         Counter 1 : <Counter count={this.state.count} increase={this.onIncrease} decrease={this.onDecrease}/>
//         Counter 2 : <ACounter count={this.state.count} increase={this.onIncrease} decrease={this.onDecrease}/>
//       </div>
//     );
//   }
// }

export default App;