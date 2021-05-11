import React from 'react';
import { Grid } from 'semantic-ui-react';

import BookContainer from '../container/BookContainer';
import BookListContainer from '../container/BookListContainer';

function BookPage(props) {
    return (
        <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <BookListContainer/>
          </Grid.Column>
          <Grid.Column>
            <BookContainer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default BookPage;