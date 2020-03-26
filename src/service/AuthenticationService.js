import axios from 'axios'

const API_URL = 'http://localhost:8080';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
export const USER_ID_SESSION_ATTRIBUTE_NAME = 'authenticatedUserId';

class AuthenticationService {

    executeAuthenticationService(username, password) {
        console.log(username);
        return axios.post(`${API_URL}/authenticate`, {
            username: username,
            password: password
        })
    }

    registerSuccessfulLogin(username, userid) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem(USER_ID_SESSION_ATTRIBUTE_NAME, userid);
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false;
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_NAME);
        if (user === null) return null;
        return user
    }
}

export default new AuthenticationService()