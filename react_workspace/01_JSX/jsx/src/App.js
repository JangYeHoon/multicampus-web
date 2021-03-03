import React, { Component } from 'react';

class App extends Component {
  // JavaScript 주석
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    // JavaScript 주석
    // function formatName(user) {
    //   return user.firstName + ' ' + user.lastName;
    // }
    const user = {
      firstName : "React",
      lastName : "Component",
    }
    const type = "class";
    // JSX - camelcase 표현식 사용. ex) background-color ==> backgroundColor
    //       class ==> className
    const style = {
      backgroundColor : "black",
      color : "aqua",
      fontSize : "50px",
      fontWeight : "bold",
      padding : 6,
    }
    return (
      <div>
        {/* JSX 문법 주석 */}
        {/*
            JSX - HTML code, {Javascript 표현식}
            무조건 하나의 root element로 감싸야한다.
        */}
        <div style={style}>Hello {this.formatName(user)}. - {type}</div>
      </div>
    );
  }
}

export default App;