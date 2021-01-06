// React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있음
// 이렇게 하면 애플리케이션의 상태에 따라서 컴포넌트 중 몇 개만 렌더링할 수 있음

// 두 컴포넌트 중 로그인 상태에 따라 선택되어 보여주는 예제
import React from 'react';
// import { render } from 'react-dom';
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>
// }
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// 엘리먼트 변수
// 엘리먼트를 저장하기 위해 변수를 사용
// 컴포넌트의 일부를 조건부로 렌더링할 수 있음
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
// LoginControl이라는 유상태 컴포넌트를 만듬
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }

// 논리 && 연산자로 if를 인라인으로 표현
// JSX 안에는 중괄호를 이용해서 표현식을 포함할 수 있음
// 그 안에 JavaScript의 논리 연산자 &&를 사용하면 엘리먼트를 조건부로 넣을 수 있음
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];

// 조건부 연산자로 If-Else 구문 인라인으로 표현
// 조건부 연산자인 condition ? true : false를 사용
// 예시 1
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}
*/
// 예시 2
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            {isLoggedIn
                ? <LogoutButton onClick={this.handleLogoutClick} />
                : <LoginButton onClick={this.handleLoginClick} />
            }
        </div>
    )
}
*/

// 컴포넌트가 렌더링하는 것을 막기
// 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기기
// 렌더링 결과를 출력하는 대신 null을 반환
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {showWarning: true};
    }

    handleToggleClick() {
        this.setState(state => ({showWarning: !state.showWarning}));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function Conditional() {
    return (
      <div className="Conditional">
        <Page />
      </div>
    );
}

export default Conditional;