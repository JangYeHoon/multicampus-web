// Clock 컴포넌트를 완전히 재사용하고 캡슐화하는 방법
import React from 'react';

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// function State() {
//     return (
//         <div className="State">
//           <Clock date={new Date()}/>
//         </div>
//     );
// }

// 위의 코드는 Clock이 타이머를 설정하고 매초 UI를 업데이트하는 것이 누락
// 한 번만 코드를 작성하고 Clock이 스스로 업데이트하도록 만들어야됨
// 이것을 구현하기 위해서는 Clock 컴포넌트에 state를 추가해야 함
// Clock 클래스로 구현
// render메서드는 업데이트가 발생하면 호출
// 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수 있음
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// 클래스에 로컬 state 추가하기
// class Clock extends React.Component {
//     // 2. 초기 this.state를 지정하는 class constructor를 추가
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//     // 1. render() 메서드 안에 있는 this.props.date를 this.state.date로 변경합니다.
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// 생명주기 메서드를 클래스에 추가하기
// Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정
// 이것은 React에서 "마운팅"이라고 함
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 생명주기 메서드
    componentDidMount() {   // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {    // Clock 컴포넌트가 매초 작동하도록 하는 메서드
        this.setState({     // 컴포넌트 로컬 state 업데이트
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function State() {
    return (
        <div className="State">
          <Clock />
        </div>
    );
}

// State를 올바르게 사용하기
// setState()에 대한 세 가지
// 1. 직접 State를 수정하지 말기
// this.state.comment = 'Hello' <= X
// this.setState({comment:'Hello'}); <= O

// 2. State 업데이트는 비동기적일 수도 있음
// this.props와 this.state가 비동기적으로 업데이트될 수 있음
// this.setState({
//  counter: this.state.counter + this.props.increment,
//}) <= X
// Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));
// Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

// 3. State 업데이트는 병합됨
// setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합
// setState() 호출로 변수를 독립적으로 업데이트할 수 있음

export default State;