import React, { Component } from 'react';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {value : ''};
    }

    handleSubmit = (e) => {
        alert(this.state.value);
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value,
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