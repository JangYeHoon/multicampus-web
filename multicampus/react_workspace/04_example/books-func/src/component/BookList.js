import React from 'react';
import { Item } from 'semantic-ui-react'
import BookItem from './BookItem'

function BookList(props) {
    const listItems = props.books.map(book => (
        <BookItem key={book.ISBN} book={book} bookSelect={props.bookSelect}/>
    ))
    return (
        <Item.Group>
            {listItems}
        </Item.Group>
    );
}

export default BookList;