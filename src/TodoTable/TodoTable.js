import React from 'react'
import { db } from '../config/firebase'

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
      {this.state.tasks.map(el=>
      <div>
        <p>{el.title}</p>
        <p>{el.description}</p>
        </div>
      )}
    </div>
  
    )

  }
}

export default TodoTable