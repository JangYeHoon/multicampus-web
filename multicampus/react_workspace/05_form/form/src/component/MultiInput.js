import React, { Component } from 'react';

class MultiInput extends Component {
    constructor(props){
        super(props);
        this.state={
            isGoing : true,
            numberOfGuests : 2,
        }
    }

    handleInputChange = (event)=>{
        const {type, name} = event.target;
        const value= type === 'checkbox'? event.target.checked : event.target.value;

        this.setState({
            [name] : value,
            
        });
    }
   
    render() {
        return (
            <form>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        );
    }
}

export default MultiInput;