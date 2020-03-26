import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import UserInformationService from "../service/UserInformationService";
import { FormattedMessage } from 'react-intl';

class UserInformationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            message: null
        };
        this.refreshUserInformation = this.refreshUserInformation.bind(this)
    }

    componentDidMount() {
        this.refreshUserInformation();
    }

    refreshUserInformation() {
        UserInformationService.retrieveUser(AuthenticationService.getLoggedInUserId())
            .then(
                response => {
                    this.setState({ user: response.data })
                }
            )
    }

    render() {
        console.log('render');
        return (
            <div className="container">
                <h3><FormattedMessage id="userInformation.title" values={{firstName: this.state.user['firstName']}} /></h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th colSpan={2}><FormattedMessage id="userInformation.tableTitle" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="userInformation.name" /></td>
                                <td>{this.state.user['firstName']} {this.state.user['lastName']}</td>
                            </tr>
                            <tr>
                                <td><FormattedMessage id="userInformation.birthday" /></td>
                                <td>{this.state.user['birthday']}</td>
                            </tr>
                            <tr>
                                <td><FormattedMessage id="userInformation.email" /></td>
                                <td>{this.state.user['emailAddress']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserInformationComponent
