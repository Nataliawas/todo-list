import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class MenuTabular extends Component {
    state = { activeItem: null }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
            <Menu tabular>
                <Link to={"/"}> <Menu.Item name='Tasks' active={activeItem === 'Tasks'} onClick={this.handleItemClick} /></Link>
                
                <Link to="/addtodo">  <Menu.Item name='Add new Todo' active={activeItem === 'Add new Todo'} onClick={this.handleItemClick} /></Link>
            </Menu>
            </div>
        )
    }
}
