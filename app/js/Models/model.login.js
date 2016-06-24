import $ from "jquery"
import _ from "underscore"
import Backbone from "backbone"

class LoginModel extends Backbone.Model {

    constructor() {
        super();
    }

    defaults() {
        return {
            login: null,
            password: null,
            staySession: false
        }
    };
}

export default LoginModel;