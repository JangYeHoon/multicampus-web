import Products from './Product'
import FilterableProductTable from './component/FilterableProductTable'

function App() {
  return (
    <div>
      <FilterableProductTable products={Products}/>
    </div>
  );
}

export default App;
