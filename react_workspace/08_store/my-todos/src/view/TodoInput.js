import React from 'react';
import { Form, Icon, Button } from 'semantic-ui-react'

function TodoInput(props) {
    const {handleTodoInput, input, inputChange, handleTodoChange} = props;
    
    return (
        <Form>
            <Form.Group widths="equal">
                <Form.Input placeholder='Input...' value={input} onChange={(event)=>inputChange(event.target.value)}/>
                <Button onClick={() => handleTodoInput()}><Icon name='add'/></Button>
                <Button onClick={() => handleTodoChange()}><Icon name='exchange'/></Button>
            </Form.Group>
        </Form>
    );
}

export default TodoInput;