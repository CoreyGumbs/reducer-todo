import React from 'react';

import Todo from './components/Todo/Todo';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="logo-header-container">
        <h1 className="logo-heading">
          YouDo Todo
        </h1>
      </header>
      <Todo />
    </div>
  );
}

export default App;
