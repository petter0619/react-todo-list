import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class List extends React.Component {
  render() {
    const todoArray = this.props.todos;
    const pendingTodos = todoArray.filter(todo => !todo.isDone).length;
    const completeTodos = todoArray.filter(todo => todo.isDone).length;

    return (
      <ul className="list">
        {todoArray.length > 0 && <h3 className="list__title list__title--pending">Pending: {pendingTodos}</h3>}
        {todoArray.length > 0 && <h3 className="list__title list__title--done">Done: {completeTodos}</h3>}
        {todoArray.map((todo, index) => <Todo
            key={index}
            todo={{ ...todo, id: index }}
            toggleTodoIsDone={this.props.toggleTodoIsDone}
            deleteTodo={this.props.deleteTodo}
        />)}
      </ul>
    );
  }
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodoIsDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default List;
