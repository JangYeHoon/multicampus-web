import React from 'react';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>
//     }
//     return <h1>Hello, Stranger.</h1>
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };

//const element = (
//    <h1>
//        Hello, {getGreeting(user)}!
//    </h1>
//);
// const element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you here.</h2>
//     </div>
// )

// 아래 두개는 같음
// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// )
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

function JSX() {
    //const name = "Josh Perez";
    //const element = <h1>Hello, {name}</h1>;
    //const element = <div tabIndex="0"></div>;
    //const element = <img src={user.avatarUrl}></img>;
    return (
      <div className="JSX">
        {element}
      </div>
    );
  }
  
  export default JSX;