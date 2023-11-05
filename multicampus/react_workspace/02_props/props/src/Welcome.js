import React from 'react';
import PropsTypes from 'prop-types';
// React Component 선언 : function(lambda function), Class
// <부모 element key='value'>content</부모 element>
// ex) <Welcome name='React'/>
// 부모 element로부터 전달된 attribute 값이나 content는 props에 저장되서 전달
// 자식 element에서는 function에서 : arguement로 전달된 props 사용
//                   class에서 : 상속받은 React.Component의 this.props 사용
// *주의사항* props : readOnly

// const Welcome = props => {
//     return (
//         <div>
//             <h1>Hello, {props.name}</h1>
//         </div>
//     );
// };

function Welcome(props) {
    return (
        <div>
            <h1 style={props.style}>
                Hello, {props.name} ==&gt; {props.children}
            </h1>
        </div>
    );
}
// 부모 element로부터 props 값이 전달되지 않을때 기본값
Welcome.defaultProps = {
    style : {
        backgroundColor : "gray",
        color : "aqua",
        fontSize : "30px",
        fontWeight : "bold",
        padding : 6,
    },
    name : "java",
}

// props의 타입 설정
Welcome.propsTypes = {
    name : PropsTypes.string,
    style : PropsTypes.object
}
export default Welcome;

// import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         // 부모 element App attribute의 값 : props 객체로 참조 name
//         const name = this.props.name; // name 참조 <Welcome name="값"/>
//         const style = this.prpos.style;
//         const {name, style} = this.props;
//         return (
//             <div>
//                 <h1 style={style}>Hello, {this.props.name} {name}</h1>
//             </div>
//         );
//     }
// }

// export default Welcome;