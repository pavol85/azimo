import Backbone from "backbone";

class LoginModel extends Backbone.Model {

    defaults() {
        return {
            username: '',
            pass: '',
            remember: true
        }
    }
}

export default LoginModel;