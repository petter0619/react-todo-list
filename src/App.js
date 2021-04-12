import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import { footerQuote, headerTitle } from './assets/siteText.json';

class App extends React.Component {
  state = {
    todos: [],
  }

  addTodo = newTodo => {
    const todos = [...this.state.todos];
    todos.push(newTodo);
    this.setState({ ...this.state, todos });
  };

  toggleTodoIsDone = index => {
    const todos = [...this.state.todos];
    todos[index].isDone = !todos[index].isDone;
    this.setState({ ...this.state, todos });
  };

  deleteTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ ...this.state, todos });
  };

  addToLocalStorage = (key, value) => localStorage.setItem(key, value);

  getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

  componentDidMount() {
    const todoSave = this.getFromLocalStorage('todoSave');
    if (todoSave) this.setState(todoSave);
  }

  componentDidUpdate() {
    this.addToLocalStorage('todoSave', JSON.stringify(this.state));
  }

  render() {
    return (
      <main>
        <Header title={headerTitle}/>
        <section className="container">
          <Form addTodo={this.addTodo}/>
          <List
            todos={this.state.todos}
            toggleTodoIsDone={this.toggleTodoIsDone}
            deleteTodo={this.deleteTodo}
          />
        </section>
        <Footer quote={footerQuote}/>
      </main>
    );
  }
}

export default App;
