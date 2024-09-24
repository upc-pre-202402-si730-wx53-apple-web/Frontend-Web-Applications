export class User {
    constructor({ id, name, email, role, password }) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.role = role || '';
        this.password = password || '';
    }
}