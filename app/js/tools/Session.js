class Session {
    constructor() {
        this.sessionStorage = JSON.parse(sessionStorage.getItem('user'));
        this.localStorage = JSON.parse(localStorage.getItem('user'));
    }

    getSessionStorage() {
        return this.sessionStorage;
    }

    getLocalStorage() {
        return this.localStorage;
    }

    setSessionStorage(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    setLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    localStorageIfIsset() {
        return (this.localStorage != null);
    }

    sessionStorageIfIsset() {
        return (this.sessionStorage != null);
    }

    sessionIsset() {
        return (this.localStorageIfIsset() || this.sessionStorageIfIsset());
    }

    getUser() {
        if (this.localStorageIfIsset()) {
            return this.getLocalStorage();
        } else if (this.sessionStorageIfIsset()) {
            return this.getSessionStorage();
        }

        return false;
    }
}

export default Session;