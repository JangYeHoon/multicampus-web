import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react'
import Books from './Books';
import BookList from './component/BookList';
import BookDetail from './component/BookDetail';

function App() {
  const [books] = useState(Books);
  const [book, setBook] = useState(Books[0]);
  const onBookSelect = ((selectBook) => {
    setBook(selectBook);
  });
  return (
    <Grid celled>
        <Grid.Row>
            <Grid.Column width={8}>
              <BookList books={books} bookSelect={onBookSelect}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <BookDetail book={book}/>
            </Grid.Column>
          </Grid.Row>
      </Grid>
  );
}

export default App;
