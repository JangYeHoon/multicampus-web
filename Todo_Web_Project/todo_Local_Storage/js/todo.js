let todos = [];
let todoInputHandler = function() {
    let maxTodoNum = 0;
    //todoNum 계산
    if (todos.length != 0) {
        const result = todos.map(todo => todo.todoNum);
        maxTodoNum = Math.max(...result); //Math.max.apply(null, result)
    }
    //입력한 title 읽기
    const addTitle = document.getElementById("todoInput").value;

    //localStorage의 key값은 todoNum로 setting value는 todo 객체를 JSON.stringfy()이용해서 String으로 변경해서 저장
    //예) key : 1, value : {"todoNum":1,"title":"일정"}
    const key = maxTodoNum + 1;
    localStorage.setItem(key, JSON.stringify({ todoNum: key, title: addTitle }))
    //todoList rendering 
    displayList();
}

let todoDeleteHandler = function(todoNum) {
    //localStorage에서 Item 삭제
    localStorage.removeItem(todoNum);
    //todoList rendering
    displayList();
}

let todoClear = function() {
    //localStorage 데이터 모두 삭제
    localStorage.clear();
    //todoList rendering
    displayList();
}


function displayList() {
    todos = [];
    //localStorage에 데이터가 있는 경우 Item 배열에 저장
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = JSON.parse(localStorage.getItem(key));
            todos.push(value);
            console.log(todos);
        }
    }
    const todoList = document.getElementById("todoList");
    let dataList = "";
    todos.forEach(todo => {
        dataList += `
            <li class="shadow">
             
                <i aria-hidden="true" class="checkBtn fa fa-check"></i> ${todo.title}
                <span type ="button" class="removeBtn"  onClick="todoDeleteHandler(${todo.todoNum})">
                  <i aria-hidden="true" class="fa fa-trash-o"></i>
                 </span> 
           
            </li>`
    });

    todoList.innerHTML = dataList;
}