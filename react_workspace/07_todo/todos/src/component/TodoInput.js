import React, {useState} from 'react';
import { Form, Icon, Button } from 'semantic-ui-react'

function TodoInput(props) {
    const {handleTodoInput} = props;
    const [value, setValue] = useState('');

    const handleChange = (event)=>{
      setValue(event.target.value)
    }
    return (
        <Form onSubmit={() => handleTodoInput(value)}>
            <Form.Group widths='equal'>
                <input type="text" value={value} onChange={(event)=>handleChange(event)} />
                <Form.Field control={Button}><Icon name='add'/></Form.Field>
            </Form.Group>
        </Form>
    );
}

export default TodoInput;