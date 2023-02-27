import React, { Component } from 'react'

 class UserState extends Component {
     state={
        name:"Arnab",
        age:22
    }
  render() {
    return (
      <div>
        <h2>My Name is {this.state.name} city{this.props.city}</h2>
      </div>
    )
  }

}

export default UserState