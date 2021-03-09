import Books from "../Books";
import { makeObservable, observable, action} from 'mobx';

class BookStore  {
    @observable books = Books;
    @observable book =Books[0];

    constructor() {
        makeObservable(this)
    }

    @action
    bookSelect=(book)=>{
        this.book = book;
    } 
}

export default new BookStore(); //Singlton Object return