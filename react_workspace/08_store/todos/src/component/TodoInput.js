import React from 'react';
import { Segment, Icon, Button, Input } from 'semantic-ui-react'

function TodoInput(props) {
    const {handleTodoInput, input, handleChange, handleTodoChange} = props;
    
    return (
        <Segment.Group raised>
            <Input placeholder='Input...' value={input} onChange={(event)=>handleChange(event)}/>
            <Button onClick={() => handleTodoInput(input)}><Icon name='add'/></Button>
            <Button onClick={() => handleTodoChange(input)}><Icon name='exchange'/></Button>
        </Segment.Group>
    );
}

export default TodoInput;