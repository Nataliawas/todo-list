import React from 'react'
import { db } from '../config/firebase'
import { Segment } from 'semantic-ui-react'
import './TodoTable.css'

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


  render() {
    return (
      <div>
        {this.state.tasks.sort((a,b)=>a.created-b.created ).map(el =>
          <div key={el.id} className={`z-depth-1 task-segment`}>
            <Segment className={`${el.status}`}>
              <p>{el.title}</p>
              <p>{el.description}</p>
            </Segment>
          </div>
        )}
      </div>

    )

  }
}

export default TodoTable
