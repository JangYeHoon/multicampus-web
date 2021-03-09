import React from 'react';
import { Button } from 'semantic-ui-react'

function TodoClear(props) {
    const {handleTodoClear} = props;
    return (
        <div>
            <Button basic color='red' content='Clear All' onClick={() => handleTodoClear()}/>
        </div>
    );
}

export default TodoClear;