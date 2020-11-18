import React, {Component} from 'react';

export default class SignUp extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    return(
      <div>
        <h2>Let's<br />
          <span className="sign-up-header-emphasis">Sign Up</span>
        </h2>
        <p className="help-text">Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        {/* First Name */}
        <label htmlFor="signup-form-first-name">First Name</label>
        <input name="firstName" id="signup-form-first-name" type="text" required aria-required="true" value={this.props.firstName} onChange={this.props.handleChange}></input>

        {/* Email Address */}
        <label htmlFor="signup-form-email">Email Address</label>
        <input name="email" id="signup-form-email" type="email" required aria-required="true" value={this.props.email} onChange={this.props.handleChange}></input>

        {/* Password */}
        <label htmlFor="signup-form-password">Password</label>
        <input name="password" id="signup-form-password" type="password" minLength="8" required aria-required="true" value={this.props.password} onChange={this.props.handleChange}></input>

        {/* Submit */}
        <button onClick={this.continue}>Sign Up</button>
      </div>
    );
  }
}