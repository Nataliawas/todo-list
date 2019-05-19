import React from 'react'
import { db } from '../../config/firebase'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './TodoTable.css'





class TodoTable extends React.Component {
  state = {
    tasks: [],
    currentPage: 1,
    pageCount: []
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

      const pageCount = Array.from({ length: Math.ceil(this.state.tasks.length / 5) }, (el, index) => index + 1)

      this.setState({ pageCount })

      console.log(pageCount)
      console.log(this.state)
    })
  }

  n

  renderView = () => {


    const tasksSortedByDate = this.state.tasks.sort((a, b) => a.created - b.created)

    return (
      <div className="tasks-list">

        {tasksSortedByDate.filter((el, index) => index >= 5 * (this.state.currentPage - 1) && index <= 5 * this.state.currentPage - 1).map(el =>
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


  setPage = (event) => {
    this.setState({ currentPage: event.target.id })
    console.log(event.target.id)
  }


  renderPagination = () => {
    return (
      <div className="pagination-container"  >
        {this.state.pageCount.map((el) =>
          <div>
            <Segment id={el} key={el} className="pagination-element" onClick={this.setPage}>
              {el}
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
        <div>
          {this.renderPagination()}
        </div>
      </div>
    )
  }

}

export default TodoTable
