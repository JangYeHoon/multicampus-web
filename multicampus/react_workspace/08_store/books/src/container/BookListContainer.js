import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import BookItemView from '../view/BookItemView';

@inject("BookStore")
@observer
class BookListContainer extends Component {
    render() {
        const {books, bookSelect} = this.props.BookStore;
        const listItems = books.map(element =>{
           return( 
            <BookItemView key={element.ISBN} book={element} bookSelect={bookSelect}/>
           )
        });
        return (
            <Item.Group>
                {listItems}
            </Item.Group>        
        );
    }
}

export default BookListContainer;