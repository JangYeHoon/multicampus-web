import React from 'react';
import { Segment, Icon, Button, Input } from 'semantic-ui-react'

function TodoInput(props) {
    const {handleTodoInput, input, inputChange, handleTodoChange} = props;
    
    return (
        <Segment.Group raised>
            <Input placeholder='Input...' value={input} onChange={(event)=>inputChange(event.target.value)}/>
            <Button onClick={() => handleTodoInput()}><Icon name='add'/></Button>
            <Button onClick={() => handleTodoChange()}><Icon name='exchange'/></Button>
        </Segment.Group>
    );
}

export default TodoInput;