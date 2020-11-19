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
      errors: {},
    };

    // Handle the submission event.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = () => {
    // Get the current values.
    const {firstName, email, password} = this.state;
    const values = {firstName, email, password};
    // Set the email regex pattern.
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    // Initialize some values.
    let errors = {};
    let isValid = true;

    // Check each value submitted.
    Object.entries(values).forEach(([key, val]) => {
      // If no value, set generic error.
      if (val === '') {
        isValid = false;
        errors[key] = "Please enter a valid input.";
      } else if (key === 'email') {
        // If the email is set, check if the string is a valid email pattern. If not, set email specific error.
        if (!pattern.test(val)) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
    });

    // Set the errors created.
    this.setState({
      errors: errors,
    });

    // Return bool of if valid.
    return isValid;
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
      [name]: value,
    });
  }

  // I'm not submitting this form to anything, so just show an alert if successful.
  handleSubmit = event => {
    event.preventDefault();
    alert("Congrats! You've signed in!");
  }

  // Determine which step we are on and return the correct component.
  renderSwitch = (step, values, errors) => {
    switch (step) {
      case 1:
        return <SignUp
                  nextStep={this.nextStep}
                  validate={this.validate}
                  handleChange={this.handleChange}
                  values={values}
                  errors={errors} />;

      case 2:
        return <Confirmation values={values} />;

      default:
        break;
    }
  }

  render() {
    // Set up the render data.
    const {step, firstName, email, password, errors} = this.state;
    const values = {firstName, email, password};

    return (
      <form
        className="container"
        onSubmit={this.handleSubmit}>
        {/* Call the switch function to get the correct component to render. */}
        {this.renderSwitch(step, values, errors)}
      </form>
    );
  }
}