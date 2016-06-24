export default class Login {

    constructor(login, pass) {
        this.login = login;
        this.password = pass;
    }

    login() {
        console.log('login: ' + this.login, 'pass: ' + this.password);
        
        return true;
    }
}