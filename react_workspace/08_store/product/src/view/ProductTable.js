import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const {products, filterText, inStockOnly} = this.props;
        const productList = [];
        let lastCategory = null;

        products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                productList.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            productList.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;