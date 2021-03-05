import React, { Component } from 'react';

class InputText extends Component {
    constructor(props){
        super(props);
        this.state ={value:''};
    
    }

    handleSubmit = (event)=>{
       alert(this.state.value);
       event.preventDefault();
    }

    handleChange =(event)=>{
        this.setState({
            value: event.target.value,
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

export default InputText;