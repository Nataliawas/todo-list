import React from 'react'
import { db } from '../config/firebase'
import { Segment, Form, Checkbox } from 'semantic-ui-react'

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

  handleCheckbox = (event) => {
    console.log('checkbox')
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(el =>
          <div>
            <Segment key={el.id}>
              <p>{el.title}</p>
              <p>{el.description}</p>
              <Form>  <Form.Field>
                <Checkbox onChange={this.handleCheckbox} label='DONE' />
              </Form.Field></Form>
            </Segment>
          </div>
        )}
      </div>

    )

  }
}

export default TodoTable