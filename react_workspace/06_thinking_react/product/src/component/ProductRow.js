import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const {name, price, stocked} = this.props.product;
        // const name = stocked ?
        //     this.props.product.name :
        //     <span style={{color:'red'}}>
        //         {this.props.product.name}
        //     </span>;

        return (
            <tr>
                {stocked ?
                    <td>{name}</td> :
                    <td><span style={{color:'red'}}>{name}</span></td>
                }
                <td>
                    {price}
                </td>
            </tr>
        );
    }
}

export default ProductRow;