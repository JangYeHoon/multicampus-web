import React from 'react';
import Products from './Product';
import FilterableProduct from './component/FilterableProductTable'

function App(props) {
  return (
    <div>
      <FilterableProduct products={Products}/>
    </div>
  );
}

export default App;