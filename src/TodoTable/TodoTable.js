import React from 'react'
import { db } from '../config/firebase'

class TodoTable extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        db.ref('tasks/').on("value", snapshot => {
          console.log(snapshot.val())
      })
    }

render () {
    return (
      <p>cycki</p>
    )

}
}

export default TodoTable