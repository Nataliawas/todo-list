
import React from 'react';
import TodoTable from './routes/TodoTable/TodoTable'
import TodoForm from './routes/TodoForm/TodoForm'
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskEdit from './routes/TaskView/TaskEdit';




function App() {
  return (
    <Router>
    <div>

     <TodoTable />
        <div>
          <Route exact path="/" component={TodoTable} />
          <Route path="/addtodo" component={TodoForm} />
          <Route path="/edit/:id" component={TaskEdit} />
        </div>
    
    </div>
    </Router>

  );
}

export default App;
