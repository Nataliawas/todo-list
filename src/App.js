
import React from 'react';
import TodoTable from './routes/TodoTable/TodoTable'
import TodoForm from './routes/TodoForm/TodoForm'
import { BrowserRouter as Router, Route } from "react-router-dom"
import TaskEdit from './routes/TaskView/TaskEdit'
import MenuTabular from './components/Menu'



function App() {
  return (
    <Router>
      <div>
        <MenuTabular />

        <div>

          <Route path="/" exact component={TodoTable} />
          <Route path="/addtodo" exact component={TodoForm} />
          <Route path="/edit/:id" component={TaskEdit} />

        </div>

      </div>
    </Router>

  );
}

export default App;
