import React from 'react'
import { db } from '../../config/firebase'
import { Segment, Button } from 'semantic-ui-react'
import './TodoTable.css'

import { Link } from 'react-router-dom'



class TodoTable extends React.Component {
  state = {
    tasks: []
  }


  componentDidMount() {
    db.ref('tasks/').on("value", snapshot => {
      const tasks = []
      Object.entries(snapshot.val()).forEach(elem => {

        const id = Object.keys(elem[1])[0];

        const task = {
          id: id,
          ...elem[1][id]
        }
        tasks.push(task)

        this.setState({ tasks })

      })

    })
  }



  renderView = () => {

    const tasksSortedByDate = this.state.tasks.sort((a, b) => a.created - b.created)

    return (
      <div>
        <Link to={`/addtodo`}> <Button className="waves-effect waves-light btn" type="submit" name="action">
          <i className="material-icons">add</i>Add new todo</Button></Link>
        {tasksSortedByDate.map(el =>
          <div key={el.id} className={`z-depth-1 task-segment`}>
            <Segment className={`${el.status}`}>
              <p>{el.title}</p>
              <p>{el.description}</p>

              <Link to={`/edit/${el.id}`}> <button><i className="small material-icons">edit</i></button></Link>
            </Segment>
          </div>
        )}
      </div>
    )
  }



  render() {

    return (
      <div>

        <div>
          {this.renderView()}
        </div>

      </div>
    )
  }

}

export default TodoTable
