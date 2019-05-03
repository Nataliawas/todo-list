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

            console.log(elem);
            
            const task = {
              id: id,
              ...elem[1][id]
            }
            tasks.push(task)
          })
          console.log(tasks);
          this.setState({ tasks })
        })
      }


render () {
    return (
        <p>test</p>
    )

}
}

export default TodoTable