
import React from 'react';
import TodoTable from './routes/TodoTable/TodoTable'
import TodoForm from './routes/TodoForm/TodoForm'
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import { Switch } from 'react-router'
import TaskEdit from './routes/TaskView/TaskEdit';
import MenuTabular from './components/Menu'



function App() {
  return (
    <Router>
      <div>
        <MenuTabular />
        <TodoTable />
        <div>
          <Switch>
            <Route exact path="/" component={TodoTable} />
            <Route path="/addtodo" component={TodoForm} />
            <Route path="/edit/:id" component={TaskEdit} />
          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default App;
