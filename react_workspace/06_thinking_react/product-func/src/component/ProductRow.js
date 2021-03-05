import React from 'react';
import { Table } from 'semantic-ui-react'

function ProductRow(props) {
    const {name, price, stocked} = props.product;
    
    return (
        <Table.Row>
            {stocked ?
                <Table.Cell>{name}</Table.Cell> :
                <Table.Cell error>{name}</Table.Cell>
            }
            <Table.Cell>{price}</Table.Cell>
        </Table.Row>
    );
}

export default ProductRow;