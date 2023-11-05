import React from 'react';
import { Item } from 'semantic-ui-react'

function BookItem(props) {
    const book = props.book;
    return (
        <Item>
            <Item.Image size='tiny' src={book.imgUrl} />

            <Item.Content>
                <Item.Header as='a' onClick={() => props.bookSelect(book)}>{book.title}</Item.Header>
                <Item.Meta>{book.price}</Item.Meta>
                <Item.Extra>{book.author}</Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default BookItem;