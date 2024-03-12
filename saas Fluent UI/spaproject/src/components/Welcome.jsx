import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props){
        super()
        this.state={
            heading: " "
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
      </div>
    )
  }
}

