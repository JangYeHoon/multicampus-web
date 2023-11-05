import React, { Component } from 'react';
import { Select } from 'semantic-ui-react';

class SelectSU extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'coconut',
        }
    }

    handleChange = (event, selectData)=>{
       // console.log(event, selectData);
        this.setState({
            value : selectData.value,
        });
    }

    handleSubmit =(event)=>{
        alert('Your favorite flavor is: '+ this.state.value);
        event.preventDefault();
    }

    render() {
        const optionList =[
            {key:'grapefruit', value:'grapefruit', text:'Grapefruit'},
            {key:'lime', value:'lime', text:'Lime'},
            {key:'coconut', value:'coconut', text:'Coconut'},
            {key:'mango', value:'mango', text:'Mango'},
        ]
        return (
            <form onSubmit={this.handleSubmit}>
          
              Pick your favorite flavor:
              <Select options={optionList} onChange={(event, optionList)=>this.handleChange(event, optionList)} />
          
          
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

export default SelectSU;