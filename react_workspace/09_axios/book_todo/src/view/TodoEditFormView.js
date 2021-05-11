import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class TodoEditFormView extends Component {
 

  render() {
    //
    const {
      todo,
      onSetTodoProp,
      onAddTodo,
      onRemoveTodo,
      onModifyTodo,
    } = this.props;

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            placeholder="일정을 입력하세요"
            value={todo && todo.title ? todo.title : ""}
            onChange={(e) => onSetTodoProp("title", e.target.value)}
          />
  
        </Form.Group>
        <Button primary onClick={onAddTodo}>
          Add
        </Button>
        <Button primary onClick={onRemoveTodo}>
          Remove
        </Button>
        <Button primary onClick={onModifyTodo}>
          Modify
        </Button>
      </Form>
    );
  }
}

export default TodoEditFormView;
