import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import TodoContainer from './container/TodoContainer';
import TodoListContainer from './container/TodoListContainer';
import { inject, observer } from "mobx-react";

@inject('TodoStore')
@observer
class App extends Component {
  render() {
    return (
      <Grid centered columns={2}>
            <Grid.Row centered columns={3}>
                <Grid.Column textAlign='center'>
                    <h1>TODO It!</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3} textAlign='center'>
                <Grid.Column>
                    <TodoContainer/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <TodoListContainer/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
  }
}

export default App;