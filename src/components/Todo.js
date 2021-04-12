import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  buttonRef = React.createRef();

  checkboxRef = React.createRef();

  handleClick = () => {
    const todoIndex = this.buttonRef.current.dataset.todoid;
    this.props.deleteTodo(todoIndex);
  };

  handleChange = () => {
    const todoIndex = this.checkboxRef.current.dataset.todoid;
    this.props.toggleTodoIsDone(todoIndex);
  };

  render() {
    const { isDone, id, text } = this.props.todo;
    return (
      <li className={isDone ? 'list-item list-item--done' : 'list-item list-item--pending'}>
        <input
          className='list-item__checkbox'
          type="checkbox" id={`item${id}`}
          data-todoid={id}
          checked={isDone}
          onChange={this.handleChange}
          ref={this.checkboxRef}
        />
        <label
          className={isDone ? 'list-item__label list-item__label--done' : 'list-item__label'}
          htmlFor={`item${id}`}
        >{text}</label>
        {isDone && <button
          className="list-item__delete-btn"
          data-todoid={id}
          onClick={this.handleClick}
          ref={this.buttonRef}
        >X</button>}
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  toggleTodoIsDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
