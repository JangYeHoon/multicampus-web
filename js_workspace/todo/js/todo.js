let todoInputHandler = function() {
    // todos 배열에 {todoId: todoId는 todo.length+1, title: #toodoInput에 입력된 value 값 추가
    //const result = todos.map(todo => todo.todoNum);
    //let maxId = Math.max.apply(null, result);
    const addTitle = document.getElementById('todoInput').value;
    let todo = {todoId: maxTodoId++, title: addTitle};
    if (addTitle == '') {
        alert("입력 메시지가 없습니다.");
    }
    else {
        todos.push(todo);
        document.getElementById('todoInput').value = null;
    }
    document.getElementById('todoInput').focus();
    // todoList rendering
    displayList();
}

let todoDeleteHandler = function(todoId) {
    // todos 배열에서 todoId에 해당하는 데이터 삭제
    // todos = todos.filter(todo => todo.todoId != todoId);
    const index = todos.findIndex(todo => todo.todoId == todoId);
    todos.splice(index, 1);
    // todoList rendering
    displayList();
}

let todoClear = function() {
    // todos 배열 empty
    todos = [];
    // todoList rendering
    displayList();
}

function displayList() {
    const todoList = document.getElementById('todoList');
    let dataList = "";
    todos.forEach(todo => {
        dataList += `
        <li class="shadow">
            <i aria-hidden="true" class="checkBtn fa fa-check"></i>
                ${todo.title}
            <span type="button" class="removeBtn" onClick="todoDeleteHandler(${todo.todoId})">
                <i aria-hidden="true" class="fa fa-trash-o"></i>
            </span>
        </li>`
    });
    todoList.innerHTML = dataList;
}