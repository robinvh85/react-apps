import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    const renderList = this.props.list.map( (item, idx) => { return <li key={idx}>{item}</li> } )
    return (
      <ul>
        { renderList }
      </ul>
    )
  }
}

export default TodoList;