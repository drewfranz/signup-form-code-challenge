import React, {Component} from 'react';

export default class Confirmation extends Component {
    signIn = () => {
        alert("Congrats! You've signed in!");
    }

    render() {
        const {values: {firstName, email}} = this.props;

        return(
            <div>
                <h2>Welcome,<br />
                    {firstName}!
                </h2>
                <p>You have been registered for this awesome service. Please check your email listed below for instructions.</p>
                <p className="registered-email">{email}</p>
                <button onClick={this.signIn}>Sign In</button>
            </div>
        );
    }
}