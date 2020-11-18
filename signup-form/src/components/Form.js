import React, { Component } from 'react';

export default  class Form extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <h2>Let's Sign Up</h2>
                <p className="help-text">Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
                <form className="signup-form">
                    {/* First Name */}
                    <label for="signup-form-first-name">First Name</label>
                    <input id="signup-form-first-name" type="text" required aria-required="true"></input>

                    {/* Email Address */}
                    <label for="signup-form-email">Email Address</label>
                    <input id="signup-form-email" type="email" required aria-required="true"></input>

                    {/* Password */}
                    <label for="signup-form-password">Password</label>
                    <input id="signup-form-password" type="password" minLength="8" required aria-required="true"></input>

                    {/* Submit */}
                    <input type="submit" value="Sign Up"></input>
                </form>
            </div>
        );
    }
}