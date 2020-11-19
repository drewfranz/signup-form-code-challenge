import React, {Component} from 'react';

export default class Confirmation extends Component {
    render() {
        // Get the submited values so we can render them.
        const {values: {firstName, email}} = this.props;

        return(
            <div className="confirmation mx-auto shadow p-4 mb-5 bg-white rounded-lg clearfix">
                <h2>Welcome,<br />
                <span className="header-emphasis">{firstName}!</span>
                </h2>
                <p>You have been registered for this awesome service. Please check your email listed below for instructions.</p>
                <p className="registered-email">{email}</p>
                <input type="submit" value="Sign In" className="btn-danger rounded-lg p-2 px-4 float-right border-0" />
            </div>
        );
    }
}