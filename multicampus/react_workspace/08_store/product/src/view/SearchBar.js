import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const {filterText, inStockOnly, handleFilterTextChange, handleInStockChange} = this.props;

        return (
            <form>
                <input type="text" placeholder="Search..."
                    value={filterText}
                    onChange={(event) => handleFilterTextChange(event.target.value)}
                />
                <p>
                    <input type="checkbox" 
                        checked={inStockOnly}
                        onChange={(event) => handleInStockChange(event.target.checked)}/> &nbsp;&nbsp;
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;