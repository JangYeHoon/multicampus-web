import React from 'react';
import { List } from 'semantic-ui-react'

function TodoItem(props) {
    const {todo, handleTodoDelete, onToggle} = props;
    return (
        <List.Item>
            <List.Icon name='check' size='large' verticalAlign='middle' color='blue'/>
            <List.Content>
                <List.Header onClick={() => onToggle(todo)}>{todo.title}</List.Header>
            </List.Content>
            <List.Icon name='trash' size='large' verticalAlign='middle' color='red' onClick={() => handleTodoDelete(todo.num)}/>
        </List.Item>
    );
}

export default TodoItem;