import React from 'react';
import { db } from '../../config/firebase'
import { Checkbox } from 'semantic-ui-react'

class TaskEdit extends React.Component {

  state = {
    title: "",
    description: "",
    status: ""
  }



  componentDidMount() {


    const id = this.props.match.params.id;
  

    db.ref(`tasks/${id}`).on('value', snapshot => {
      this.setState(snapshot.val())
    })

  }

  handleSubmit = () => {

    const id = this.props.match.params.id
    db.ref(`tasks/${id}`).set(this.state).then(data => {
      this.props.history.push(`tasks/${id}`)
    })
  }


  

  render() {
    return (
      <div>
        <h1>Edit task</h1>
        <div>
          <div>
            Title:
            <input type="text" defaultValue={this.state.title} name="title" onChange={this.handleChange} />
          </div>
          <div>
            Description:
            <input type="text" defaultValue={this.state.description} name="description" onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskEdit;