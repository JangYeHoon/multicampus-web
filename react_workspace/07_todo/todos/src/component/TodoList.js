import React from 'react';
import { List } from 'semantic-ui-react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const listTodos = props.todos.map(todo => (
        <TodoItem key={todo.num} title={todo.title} num={todo.num} handleTodoDelete={props.handleTodoDelete}/>
    ))
    return (
        <List divided relaxed>
            {listTodos}
        </List>
    );
}

export default TodoList;