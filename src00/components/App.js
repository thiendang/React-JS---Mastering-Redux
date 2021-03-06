import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import AgeStats from './AgeStats';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDate: '',
      birthday: '1995-10-31',
      showStats: false
    }
  }
  getDate = (e) => {
    this.setState({newDate: e.target.value})
  }
  changeBirthday = () => {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    })
  }
  render(){
    return(
      <div className="appDiv">
        <Form inline>
          <h2 className="test">Input your birthday</h2>
          <FormControl type="date" onChange={this.getDate}></FormControl>
          <Button onClick={this.changeBirthday} className="btn btn-success">Submit</Button>
        </Form>
        {
          this.state.showStats
          ?
          <div className="age-stats"><AgeStats date={this.state.birthday}/></div>
          :
          <div></div>
        }
      </div>
    )
  }
}
