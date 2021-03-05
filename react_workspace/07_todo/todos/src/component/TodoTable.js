import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoClear from './TodoClear';
import { Grid } from 'semantic-ui-react'

function TodoTable(props) {
    let todos = ['1', '2'];
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <TodoInput/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <TodoList todos={todos}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <TodoClear/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default TodoTable;