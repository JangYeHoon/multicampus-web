import {makeObservable, action, observable} from 'mobx';

class TodoStore {
    @observable todos = [];
    @observable todo = { id : "", title: "" };

    constructor() {
        makeObservable(this)
    }

    @action
    setTodoProp(name, value) {
        this.todo = {
            ...this.todo,
            [name] : value,
        };
    }

    @action
    addTodo() {
        this.todos = this.todos.concat(this.todo);
    }

    @action
    removeTodo() {
        this.todos = this.todos.filter((element) => element.id !== this.todo.id);
        this.todo = {};
    }

    @action
    modifyTodo() {
        this.todos = this.todos.map((element) => element.id === this.todo.id ? this.todo : element);
        this.todo = {};
    }

    @action
    selectTodo(id) {
        this.todo = this.todos.find((element) => element.id === id)
    }

    // @computed
    // get getTodo() {
    //     return this.todo ? this.todo : {};
    // }

    // @computed
    // get getTodos() {
    //     return this.todos ? this.todos.slice() : [];
    // }
}

export default new TodoStore();