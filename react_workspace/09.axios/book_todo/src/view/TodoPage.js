import React from 'react';
import TodoContainer from '../container/TodoContainer';
import TodoListContainer from '../container/TodoListContainer';

const style={
    color: '#2f3b52',
    fontWeight: '900',
    margin: '2.5rem 0 1.5rem',
    textAlign:'center',
  }


function TodoPage(props) {
    return (
        <div>
            <header style={style}>
            <h1> TODO It !</h1>
        </header>
        <TodoContainer />
        <TodoListContainer />
        </div>
    );
}

export default TodoPage;