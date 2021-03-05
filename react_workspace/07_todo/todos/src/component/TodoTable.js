import React, {useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoClear from './TodoClear';
import { Grid } from 'semantic-ui-react'

function TodoTable(props) {
    const [todos, setTodos] = useState([
        {num:1, title:'일정1'},
        {num:2, title:'일정2'}
    ]);
    const [maxNum, setMaxNum] = useState(3);

    const handleTodoInput = ((inputText) => {
        if (inputText !== '') {
            setTodos(todos.concat({num:maxNum, title:inputText}));
            setMaxNum(maxNum + 1);
        }
    })

    const handleTodoDelete = ((deleteNum) => {
        setTodos(todos.filter(todo => todo.num !== deleteNum));
    })

    const handleTodoClear = (() => {
        setTodos([])
    })

    return (
        <Grid centered columns={2}>
            <Grid.Row centered columns={3}>
                <Grid.Column textAlign='center'>
                    <h1>TODO It!</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3} textAlign='center'>
                <Grid.Column>
                    <TodoInput handleTodoInput={handleTodoInput}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <TodoList todos={todos} handleTodoDelete={handleTodoDelete}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column textAlign='center'>
                    <TodoClear handleTodoClear={handleTodoClear}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default TodoTable;