import React from 'react';
// 합성 vs 속성
// React는 강력한 합성 모델을 가지고 있으며 상속 대신
// 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋음

// 컴포넌트에서 다른 컴포넌트를 담기
// 컴포넌트는 어떤 자식 엘리먼트가 올지 미리 예상할 수 없는 경우가 있음
// 범용적인 '박스' 역할을 하는 Sidebar혹은 Dialog와 같은 컴포넌트에서 자주 볼 수 있음
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' +props.color}>
            {props.children}
        </div>
    );
}
//이러한 방식으로 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달
/*
function WelcomDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spaceraft!
            </p>
        </FancyBorder>
    );
}
*/
// 흔하지 않지만 종종 컴포넌트에 여러 개의 "구멍"이 필요할 수도 있음
// 이런 경우 children 대신 자신만의 고유한 방식을 적용할 수 있음
/*
function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts/>
            }
            right={
                <Chat />
            } />
    );
}*/
// <contacts />와 <Chat />는 React 엘리먼트는 단지 객체이기 때문에
// 다른 데이터처럼 prop로 전달할 수 있음

// 특수화
// 어떤 컴포넌트의 특수한 경우인 컴포넌트를 고려해야 하는 경우가 있음
// 예를 들어, WelcomDialog는 Dialog의 특수한 경우
// React에서는 이 역시 합성을 통해 해결
// 구체적인 컴포넌트가 일반적인 컴포넌트를 렌더링하고 props를 통해 내용을 구성
/*
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}*/

// 합성은 클래스로 정의된 컴포넌트에서도 동일하게 적용
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                message = "How should we refer to you?">
                    <input value={this.state.login}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

// 그렇다면 상속은?
// Facebook에서 수천개의 React 컴포넌트를 사용하지만 상속 계층 구조로
// 작성을 권장할만한 사례를 찾지 못함
// UI가 아닌 기능을 여러 컴포넌트에서 재사용하기를 원한다면,
// 별도의 JavaScrit 모듈로 분리하는 것이 좋음
// 컴포넌트에서 해당 함수, 객체, 클래스등을 import하여 사용할 수 있음
// 상속받을 필요가 없음

function Composition() {
    return (
      <div className="Lifting">
        <SignUpDialog />
      </div>
    );
}

export default Composition;