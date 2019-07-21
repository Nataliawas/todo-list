
import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import { db } from '../../config/firebase'

class TodoForm extends React.Component {

    state = {
        title: "",
        status: "todo",
        created: null,
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
     

        function getTaskTime() {
            return new Date().getTime()
        }


        
        const taskTime = getTaskTime()
        db.ref('tasks/').push({
            title: this.state.title,
            status: 'todo',
            created: taskTime,
         

        })
    }

    render() {
        return (
            <Container>
                <h4>Add new todo: </h4>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title' name="title" type="text" required onChange={this.handleChange} />
                    </Form.Field>
                    <Button className="waves-effect waves-light btn" type="submit" name="action" onClick={this.handleSubmit}>
                        <i className="material-icons">add</i></Button>
                </Form >
            </Container>
        )
    }
}


export default TodoForm