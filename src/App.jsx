import React, { Component } from "react";
import uniqid from 'uniqid'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      Edit: true,
      text: ''
    }
  }

  Submit = () => {
      this.setState({
        Edit: false
      })
    console.log(this.state.Edit)
  }

  Edit = () => {
    this.setState({
      Edit: true
    })
  console.log(this.state.Edit)
}

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleEdit = () => {

  }
 
  render(){
    
    return(
      <>
        
      </>
    )
  }
}

export default App