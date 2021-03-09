import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import SearchBar from '../view/SearchBar';
import ProductTable from '../view/ProductTable';

@inject('ProductStore')
@observer
class ProductContainer extends Component {

    handleFilterTextChange = (changeText) => {
        this.props.ProductStore.handleFilterTextChange(changeText);
    }

    handleInStockChange = (stocked) => {
        this.props.ProductStore.handleInStockChange(stocked);
    }

    render() {
        const {products, filterText, inStockOnly} = this.props.ProductStore;
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    handleFilterTextChange={this.handleFilterTextChange}
                    handleInStockChange={this.handleInStockChange}/>
                <ProductTable
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}/>
            </div>
        );
    }
}

export default ProductContainer;