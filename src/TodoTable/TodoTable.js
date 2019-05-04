import React from 'react'
import { db } from '../config/firebase'
import { Segment, Loader, Dimmer, Image } from 'semantic-ui-react'
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

  renderTasks = () => {


    return (
      <div>
        {this.state.tasks.sort((a, b) => a.created - b.created).map(el =>
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

  renderLoader = () => {
    return (
      <div >
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>
      </div>
    )
  }

  render() {

    return (
      <>
        {this.state.tasks.length && this.renderTasks()}
        {!this.state.tasks.length && this.renderLoader()}
      </>
    )
  }

}

export default TodoTable
