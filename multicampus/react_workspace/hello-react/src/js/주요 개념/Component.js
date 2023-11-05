// 컴포넌트는 JavaScript 함수와 유사
// "props"라고하는 임의의 입력을 받은 후 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환
// 컴포넌트의 이름은 항상 대문자로 시작
// import { Component } from "react";

// 컴포넌트 정의의 가장 간단한 방법(JavaScript 함수를 작성하는 것)
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// ES6 class를 사용하여 컴포넌트를 정의
// class Welcome extends React, Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// React 엘리먼트는 사용자 정의 컴포넌트로 나타낼 수 있음
// 2. 컴포넌트 합성
// Welcome을 여러 번 렌더링하는 컴포넌트를 만들 수 있음
// const element = <Welcome name="Sara"/>
function Component() {
    return (
      <div className="Component">
        <Welcome name="Sara"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
      </div>
    );
}

// props는 읽기 전용
// 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정하면 안됨
// 순수 함수 : 입력값을 안바꾸고 항상 동일한 입력값에 대해 동일한 결과를 반환
// function sum(a, b) {
//   return a + b;
// }
// 순수 함수 X
// function withdraw(account, amount) {
//   account.total -= amount;
// }
// React는 매우 유연하지만 한 가지 엄격한 규칙이 있음
// 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수함수처럼 동작해야 된다.

export default Component;