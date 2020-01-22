import React from 'react';

import {initialState, todoReducer} from './reducers/reducers';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';


function App() {
  console.log(initialState);
  return (
    <div className="App">
      <TodoList />
      <TodoForm />  
    </div>
  );
}

export default App;
