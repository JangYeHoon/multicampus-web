import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class BookItem extends Component {
    render() {
        const {book, bookSelect} = this.props;
        return (
          <Item onClick={()=>bookSelect(book)}>
            <Item.Image size='tiny' src={book.imgUrl} />

            <Item.Content>
                <Item.Header as='a'>{book.title}</Item.Header>
                <Item.Meta>{book.price}</Item.Meta>
                <Item.Extra>{book.author}</Item.Extra>
            </Item.Content>
          </Item>
        );
    }
}

export default BookItem;