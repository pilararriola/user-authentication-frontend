import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import { FormattedMessage } from 'react-intl';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

        AuthenticationService
             .executeAuthenticationService(this.state.username, this.state.password)
             .then((response) => {
                 AuthenticationService.registerSuccessfulLogin(this.state.username, response.data.user);
                 this.props.history.push(`/user`)
             }).catch(() => {
                 this.setState({ showSuccessMessage: false });
                 this.setState({ hasLoginFailed: true })
             })

    }

    render() {
        return (
            <div className="container" >
                <h1><FormattedMessage id="login.title" /></h1>
                <div>
                    {this.state.hasLoginFailed && <div className="alert alert-warning"><FormattedMessage id="login.fail" /></div>}
                    {this.state.showSuccessMessage && <div><FormattedMessage id="login.success" /></div>}
                    <div className="form-group">
                        <label htmlFor="username"><FormattedMessage id="login.username" /></label>
                        <input className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><FormattedMessage id="login.password" /></label>
                        <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-success btn-default" onClick={this.loginClicked}><FormattedMessage id="login.button" /></button>
                </div>
            </div>
        )
    }
}

export default LoginComponent