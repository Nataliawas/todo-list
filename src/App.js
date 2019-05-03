import React from 'react';
import TodoTable from './TodoTable/TodoTable'
import TodoForm from '../src/TodoForm/TodoForm'


function App() {
  return (
    <div className="App">
    <TodoForm />
    
    <TodoTable />
    </div>
  );
}

export default App;
