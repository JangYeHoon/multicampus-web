import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import ProductContainer from './container/ProductContainer';

@inject('ProductStore')
@observer
class App extends Component {
  render() {
    return (
      <div>
        <ProductContainer/>
      </div>
    );
  }
}

export default App;