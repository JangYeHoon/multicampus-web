import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function BookDetail(props) {
    const book = props.book;
    return (
        <Card>
            <Image src={book.imgUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{book.author} &nbsp; {book.publisher}</span>
                    <span className='date'>{book.price}</span>
                </Card.Meta>
                <Card.Description>
                    {book.introduce}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default BookDetail;