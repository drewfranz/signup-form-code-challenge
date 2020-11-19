import React, {Component} from 'react';
import './SignUp.css';

export default class SignUp extends Component {

  // We need to check if valid inputs have been submitted.
  checkIfFormCanContinue = event => {
    event.preventDefault();

    // Run the validation function.
    if (this.props.validate()) {
      // Validation passed, so move to the next step of the form.
      this.props.nextStep();
    }
  }

  render() {
    // Get any errors so we can display them.
    const {errors} = this.props;

    return(
      <div className="sign-up mx-auto shadow p-4 mb-5 bg-white rounded-lg clearfix">
        <h2 className="sign-up-header">Let's<br />
          <span className="sign-up-header-emphasis">Sign Up</span>
        </h2>
        <p className="help-text">Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        <fieldset className="sign-up-fields">
          <legend hidden>Your registration information</legend>
          {/* First Name */}
          <label htmlFor="signup-form-first-name">First Name</label>
          <input className={errors.firstName ? 'error' : ''} name="firstName" id="signup-form-first-name" type="text" required aria-required="true" value={this.props.firstName} onChange={this.props.handleChange}></input>
          <div className="text-danger">{errors.firstName}</div>

          {/* Email Address */}
          <label htmlFor="signup-form-email">Email Address</label>
          <input className={errors.email ? 'error' : ''}  name="email" id="signup-form-email" type="email" required aria-required="true" value={this.props.email} onChange={this.props.handleChange}></input>
          <div className="text-danger">{errors.email}</div>

          {/* Password */}
          <label htmlFor="signup-form-password">Password</label>
          <input  className={errors.password ? 'error' : ''}  name="password" id="signup-form-password" type="password" minLength="8" required aria-required="true" value={this.props.password} onChange={this.props.handleChange}></input>
          <div className="text-danger">{errors.password}</div>

          {/* Submit */}
          <button className="btn-danger rounded-lg p-2 px-4 float-right border-0" onClick={this.checkIfFormCanContinue}>Sign Up</button>
        </fieldset>
      </div>
    );
  }
}