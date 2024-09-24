import http from '../../shared/services/http-common'
import { User } from '../model/user.entity';

export class AuthenticationApiService {
    constructor() {
        this.endpoint = '/users';
    }

    login(email, password) {
        return http.get(`${this.endpoint}?email=${email}&password=${password}`);
    }

    register(name, email, role, password) {
        const user = new User({ name, email, role, password });

        return http.post(this.endpoint, user)
    }
}