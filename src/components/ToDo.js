import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <div>
      <li>
 <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button onClick={() this.props.onDelete(this.props.description)} className "btn btn-danger btn-sm m-2">Delete</button>
    </li>
    </div>
    );
  }
}

export default ToDo;
