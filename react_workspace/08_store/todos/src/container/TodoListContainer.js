import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoListView from '../view/TodoListView';

@inject('TodoStore')
@observer
class TodoListContainer extends Component {
    onSelectTodo = (id) => {
        this.props.TodoStore.selectTodo(id);
    }

    render() {
        return (
            <TodoListView
                todos={this.props.TodoStore.todos}
                onSelectTodo={this.onSelectTodo}/>
        );
    }
}

export default TodoListContainer;