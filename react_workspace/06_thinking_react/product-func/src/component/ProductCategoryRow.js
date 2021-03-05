import React from 'react';
import { Table } from 'semantic-ui-react';

function ProductCategoryRow(props) {
    const {category} = props;
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>{category}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

export default ProductCategoryRow;