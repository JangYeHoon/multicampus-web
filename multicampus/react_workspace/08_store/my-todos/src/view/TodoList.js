import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import TodoClear from './TodoClear';

function TodoList(props) {
    const listTodos = props.todos.map(todo => (
        <TodoItem key={todo.num} todo={todo} onToggle={props.onToggle} handleTodoDelete={props.handleTodoDelete}/>
    ))
    return (
        <List divided relaxed>
            {listTodos}
            <br/>
            <Grid centered columns={2}>
                <TodoClear handleTodoClear={props.handleTodoClear}/>
            </Grid>
        </List>
    );
}

export default TodoList;