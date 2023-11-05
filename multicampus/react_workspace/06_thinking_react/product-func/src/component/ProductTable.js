import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import { Table } from 'semantic-ui-react'

function ProductTable(props) {
    const {products, filterText, inStockOnly} = props;
    const productList = [];
    let lastCategory = null;

    products.forEach((product) => {
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
                    key={product.category}/>
            );
        }
        productList.push(
            <ProductRow
                product={product}
                key={product.name}/>
        );
        lastCategory = product.category;
    });
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {productList}
            </Table.Body>
        </Table>
    );
}

export default ProductTable;