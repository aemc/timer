import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25 2017',
      newDeadline: ''
    }
  }

  updateDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown To {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <form className="app-form">
          <FormGroup>
            <FormControl className="deadline-input"
              placeholder='Enter a new date'
              onChange={event => this.setState({newDeadline: event.target.value})} 
            /> 
            <Button bsStyle="primary" block onClick={
              () => {
                if (!isNaN(Date.parse(this.state.newDeadline)) && this.state.newDeadline !== '') {
                    this.updateDeadline();
                }
              }
            }>Submit</Button>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default App;
