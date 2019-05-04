
import React, { Component } from 'react';
import TodoTable from './TodoTable/TodoTable'
import TodoForm from '../src/TodoForm/TodoForm'
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskEdit from './TaskView/TaskEdit';




function App() {
  return (
    <div>
      <TodoForm />

      <TodoTable />
      <Router>
        <div>
          <Route path="/edit" component={TaskEdit} />
        </div>
      </Router>

    </div>
  );
}

export default App;
