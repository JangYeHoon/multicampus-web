import React from 'react';
import { List } from 'semantic-ui-react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const listTodos = props.todos.map(todo => (
        <TodoItem key={todo.num} todo={todo} onToggle={props.onToggle} handleTodoDelete={props.handleTodoDelete}/>
    ))
    return (
        <List divided relaxed>
            {listTodos}
        </List>
    );
}

export default TodoList;