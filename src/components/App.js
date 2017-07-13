import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDate: '',
      birthday: '1995-10-31'
    }
  }
  getDate = (e) => {
    this.setState({newDate: e.target.value})
  }
  changeBirthday = () => {
    console.log(this.state);
    this.setState({newDate: this.state.birthday})
  }
  render(){
    return(
      <div className="appDiv">
        <Form inline>
          <h2 className="test">Input your birthday</h2>
          <FormControl type="date" onChange={this.getDate}></FormControl>
          <Button onClick={this.changeBirthday}>Submit</Button>
          {/* <p><img className="img-responsive" src={require('../images/img_twitter-bootstrap.png')} /></p> */}
        </Form>
      </div>
    )
  }
}
