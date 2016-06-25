export default class Login {

    constructor(login, pass) {
        this.login = login;
        this.pass = pass;
    }

    getLogin() {
        console.log('login: ' + this.login, 'pass: ' + this.pass);

        return true;
    }
}