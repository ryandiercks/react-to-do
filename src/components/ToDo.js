import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
         <span>{ this.props.description }</span>
    </li>
    );
  }
}

export default ToDo;
