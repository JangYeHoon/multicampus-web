import React from 'react';
import { Input } from 'semantic-ui-react'

function SearchBar(props) {
    const {filterText, inStockOnly, handleFilterTextChange, handleInStockChange} = props;
    return (
        <div>
            <Input icon='search' placeholder='Search...' 
                value={filterText}
                onChange={(event) => handleFilterTextChange(event.target.value)}/>
            <p>
                <input type="checkbox" 
                    checked={inStockOnly}
                    onChange={(event) => handleInStockChange(event.target.checked)}/> &nbsp;&nbsp;
                Only show products in stock
            </p>
        </div>
    );
}

export default SearchBar;