
import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import { db } from '../../config/firebase'

class TodoForm extends React.Component {

    state = {
        title: "",
        description: "",
        status: "todo",
        created: null
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        function uuid() {
            return Math.floor(Math.random() * 100000000)
        }

        function getTaskTime() {
            return new Date().getTime()
        }


        const uid = uuid()
        const taskTime = getTaskTime()
        db.ref('tasks/' + uid).push({
            title: this.state.title,
            description: this.state.description,
            status: 'todo',
            created: taskTime

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
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='description' name="description" type="text" required onChange={this.handleChange} />
                    </Form.Field>
                    <Button className="waves-effect waves-light btn" type="submit" name="action" onClick={this.handleSubmit}>
                        <i className="material-icons">add</i></Button>
                </Form >
            </Container>
        )
    }
}


export default TodoForm