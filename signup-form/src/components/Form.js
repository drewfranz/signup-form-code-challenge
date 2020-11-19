import React, { Component } from 'react';
import SignUp from './SignUp';
import Confirmation from './Confirmation';
import './Form.css';

export default  class Form extends Component {
  constructor(props) {
    super(props);
    // Set up the initial input values.
    this.state = {
      step: 1,
      firstName: '',
      email: '',
      password: '',
    };

    // Handle the submission event.
    this.handleChange = this.handleChange.bind(this);
  }

  // Iterate the step counter on submit.
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step +1,
    });
  }

  // Set the state values on submit.
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  // Determine which step we are on and return the correct component.
  renderSwitch = (step, values) => {
    switch (step) {
      case 1:
        return <SignUp nextStep={this.nextStep} handleChange={this.handleChange} values={values} />

      case 2:
        return <Confirmation values={values} />

      default:
        break;
    }
  }

  render() {
    // Set up the render data.
    const {step} = this.state;
    const {firstName, email, password} = this.state;
    const values = {firstName, email, password};

    return (
      <form className="container">
        {/* Call the switch function to get the correct component to render. */}
        {this.renderSwitch(step, values)}
      </form>
    );
  }
}