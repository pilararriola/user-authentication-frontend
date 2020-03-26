import axios from 'axios'

const USERS_API_HOST = 'http://localhost:8080';
const USERS_API_URL = `${USERS_API_HOST}/users/`;

class UserInformationService {

    retrieveUser(userid) {
        console.log('Retrieving user');
        return axios.get(`${USERS_API_URL}${userid}`);
    }
}

export default new UserInformationService()