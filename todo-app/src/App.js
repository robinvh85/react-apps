import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './App.css';
import TodoList from './TodoList'

// Constants
const ADD = 'ADD';
const RESET = 'RESET';

// Action creator
const addTodo = (text) => {
  return {
    type: ADD,
    value: text
  };
}

const resetListTodo = () => {
  return {
    type: RESET
  }
}

// Reducer
const todoReducer = (state=[], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.value];
    case RESET:
      return [];
    default:
      return state;
  }
}

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.textChanged = this.textChanged.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  addItem() {
    if(this.state.input.trim() === ''){
      return;
    }

    this.setState({
      input: ''
    });
    this.props.submitNewTodo(this.state.input);
  }

  textChanged(event) {
    this.setState({input: event.target.value});
  }

  clearItems() {
    this.props.submitReset();
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.textChanged} />
        <button onClick={this.addItem}>Submit</button>
        <button onClick={this.clearItems}>Reset</button>
        <TodoList list={this.props.messages} />
      </div>
    );
  }
}

// Store
const store = createStore(todoReducer);

const mapStateToProps = (state) => {
  return { messages: state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewTodo: (item) => {
      dispatch(addTodo(item));
    },
    submitReset: () => {
      dispatch(resetListTodo());
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

export default App;
