import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoInput from '../view/TodoInput';

@inject('TodoStore')
@observer
class TodoContainer extends Component {

    handleTodoInput = () => {
        if (this.props.TodoStore.input !== ''){
            this.props.TodoStore.todoAdd();
        }
    }

    handleTodoChange = () => {
        if (this.props.TodoStore.todo !== null) {
            this.props.TodoStore.todoChange();
        }
    }

    inputChange = (value) => {
        this.props.TodoStore.inputChange(value);
    }

    render() {
        const {input} = this.props.TodoStore;
        return (
            <TodoInput
                input={input}
                handleTodoInput={this.handleTodoInput}
                inputChange={this.inputChange}
                handleTodoChange={this.handleTodoChange}/>
        );
    }
}

export default TodoContainer;