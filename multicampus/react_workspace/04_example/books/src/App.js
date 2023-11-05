import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Books from './Books';
import BookList from './component/BookList';
import BookDetail from './component/BookDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : Books,
      book : Books[0],
    }
  }

  onBookSelect = (selectBook) => {
    this.setState({
      book : selectBook,
    });
  }

  render() {
    return (
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={8}>
              <BookList books={this.state.books} bookSelect={this.onBookSelect}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <BookDetail book={this.state.book}/>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    );
  }
}

export default App;