import axios from 'axios';


class BookApi{
    URL = "/api/books/";

    bookList(){
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    bookDetail(isbn){
        return axios.get(this.URL+`detail/${isbn}/`)
                .then((response)=>response.data);
    }
}
export default BookApi;