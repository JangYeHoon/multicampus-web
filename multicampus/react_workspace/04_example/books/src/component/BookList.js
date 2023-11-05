import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'
import BookItem from './BookItem'

class BookList extends Component {
    render() {
        const {books, bookSelect} = this.props;
        const listItems = books.map(book => (
            <BookItem key={book.ISBN} book={book} bookSelect={bookSelect}/>
        ));
        return (
            <Item.Group>
                {listItems}
            </Item.Group>
        );
    }
}

export default BookList;