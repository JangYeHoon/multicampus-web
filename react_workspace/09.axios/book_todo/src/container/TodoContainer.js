import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import TodoEditFormView from '../view/TodoEditFormView';
import {generateId} from '../IDGenerator';

@inject('TodoStore')
@observer
class TodoContainer extends Component {

    onSetTodoProp = (name, value)=>{
        this.props.TodoStore.setTodoProp(name, value);
    }

    onAddTodo = ()=>{
        
        const {TodoStore} = this.props; 
        TodoStore.setTodoProp("id", generateId(5));
        TodoStore.addTodo();     
    }

    onRemoveTodo =()=>{
        this.props.TodoStore.removeTodo();
    }

    onModifyTodo =()=>{
        this.props.TodoStore.modifyTodo();
    }

    render() {
        const {todo} = this.props.TodoStore;

        return (
            <TodoEditFormView todo={todo}
                              onSetTodoProp={this.onSetTodoProp}
                              onAddTodo={this.onAddTodo}
                              onRemoveTodo={this.onRemoveTodo}
                              onModifyTodo={this.onModifyTodo} />
        );
    }
}

export default TodoContainer;