import {makeObservable, action, observable} from 'mobx';

class TodoStore {
    @observable todos = [{num:1, title:'일정1'},
                        {num:2, title:'일정2'}];
    @observable todo = null;
    @observable maxNum = 3;
    @observable input = '';

    constructor() {
        makeObservable(this);
    }

    @action
    inputChange(value) {
        this.input = value;
    }

    @action
    todoAdd() {
        this.todos = this.todos.concat({num:this.maxNum, title:this.input});
        this.maxNum += 1;
        this.todo = null;
        this.input = '';
    }

    @action
    todoDelete(deleteNum) {
        this.todos = this.todos.filter(element => element.num !== deleteNum);
        this.todo = null;
        this.input = '';
    }

    @action
    todoChange() {
        this.todos = this.todos.map(element => element.num === this.todo.num ? {num:element.num, title:this.input} : element);
        this.todo = null;
        this.input = '';
    }

    @action
    onToggle(selectTodo) {
        this.input = selectTodo.title;
        this.todo = selectTodo;
    }

    @action
    todoClear() {
        this.todos = [];
        this.todo = null;
        this.input = '';
    }
}

export default new TodoStore();