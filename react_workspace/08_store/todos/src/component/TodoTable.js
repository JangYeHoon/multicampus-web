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
    const [input, setInput] = useState('');
    const [selectTodo, setSelectTodo] = useState(null);

    const handleChange = (event)=>{
        setInput(event.target.value);
    }

    const handleTodoInput = ((inputText) => {
        if (inputText !== '') {
            setTodos(todos.concat({num:maxNum, title:inputText}));
            setMaxNum(maxNum + 1);
        }
        setSelectTodo(null);
        setInput('');
    })

    const handleTodoDelete = ((deleteNum) => {
        setTodos(todos.filter(todo => todo.num !== deleteNum));
    })

    const handleTodoChange = ((inputText) => {
        if (selectTodo !== null) {
            setTodos(todos.map(todo => todo.num === selectTodo.num ? {num:todo.num, title:inputText} : todo));
            setSelectTodo(null);
        }
    })

    const onToggle = ((changeTodo) => {
        setInput(changeTodo.title)
        setSelectTodo(changeTodo);
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
                    <TodoInput input={input} handleChange={handleChange} handleTodoInput={handleTodoInput} handleTodoChange={handleTodoChange}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <TodoList todos={todos} onToggle={onToggle} handleTodoDelete={handleTodoDelete}/>
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