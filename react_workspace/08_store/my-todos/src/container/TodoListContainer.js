import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoList from '../view/TodoList';

@inject('TodoStore')
@observer
class TodoListContainer extends Component {
    onToggle = (selectTodo) => {
        this.props.TodoStore.onToggle(selectTodo);
    }

    handleTodoDelete = (deleteNum) => {
        this.props.TodoStore.todoDelete(deleteNum);
    }

    handleTodoClear = () => {
        this.props.TodoStore.todoClear();
    }
    
    render() {
        const {todos} = this.props.TodoStore;
        return (
            <TodoList
                todos={todos}
                onToggle={this.onToggle}
                handleTodoDelete={this.handleTodoDelete}
                handleTodoClear={this.handleTodoClear}/>
        );
    }
}

export default TodoListContainer;