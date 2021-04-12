import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  todoRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      text: this.todoRef.current.value,
      isDone: false,
    };
    this.props.addTodo(newTodo);
    e.target.reset();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="todo"
          placeholder="Type your todo here"
          required
          ref={this.todoRef}
        />
        <button className="form__submit" type="submit">Add Todo</button>
      </form>
    );
  }
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Form;
