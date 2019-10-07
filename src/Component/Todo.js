import React, { Component } from "react";
import AddTodoComponent from "./AddTodoComponent";
import TodoItem from "./todoItem";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      newTodo: "",
      is_edit: false,
      ind: null
    };
    this.value = [];
  }

  handleClick = e => {
    const { newTodo } = this.state;
    this.value.push(newTodo);
    this.setState({ todoList: this.value, newTodo: "" });
  };
  handleOnChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = todo => {
    const todolistAdd = this.state.todolist;
    todolistAdd.push(todo);
    this.setState({ todoList: todolistAdd });
  };
  deleteTodo = index => {
    const { todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({ todoList });
  };

  editTodo(event, index) {
    event.preventDefault();
    this.setState({
      is_edit: true,
      newTodo: this.state.todoList[index],
      ind: index
    });
  }

  handleEdit = handleEdit => {
    const value = this.state.todoList;
    // value[this.state.ind] = this.state.newTodo;
    value.splice(this.state.ind, 1, this.state.newTodo);
    this.setState({ todoList: value, newTodo: "" });
  };

  render() {
    return (
      <div>
        <center>
          <AddTodoComponent
            value={this.state.newTodo}
            onChange={this.handleOnChange}
            addTodo={this.handleClick}
            isEdit={this.state.is_edit}
            editTodo={this.handleEdit}
          />
          {this.state.todoList.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                number={i + 1}
                value={todo}
                addTodo={this.addTodo}
                deleteTodo={this.deleteTodo}
                editTodo={event => this.editTodo(event, i)}
              />
            );
          })}
          {this.state.todoList.length === 0 ? <div>this is empty</div> : ""}
        </center>
      </div>
    );
  }
}
export default Todo;
