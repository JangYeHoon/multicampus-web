import axios from 'axios';

class TodoApi{
    URL = '/api/todos/'; //http://IP:8000/api/todos/"

    todoCreate(title){
     return axios.post(this.URL+'create/', {title:`${title}`})
            .then((response)=>response.data); //resolve
            // .catch(()=>{})  //예외발생 reject
            // .finally(()=>{}); //resolve. reject 모든 경우
    }

    todoUpdate(id, title){
      return axios.put(this.URL+`update/${id}/`,{title:`${title}`})  
             .then((response)=>response.data);   
    }

    todoDelete(id){
        return axios.delete(this.URL+`delete/${id}/`)
                .then((response)=>response.data);

    }

    todoDetail(id){
        return axios.get(this.URL+`detail/${id}/`)
                .then((response)=>response.data);

    }
    todoList(){
        return axios.get(this.URL)
                .then((response)=>response.data);
    }
}

export default TodoApi;