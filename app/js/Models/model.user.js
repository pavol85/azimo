import Backbone from "backbone";

class UserModel extends Backbone.Model {
    defaults() {
        return {
            avatar_url: '',
            login: '',
            url: '',
            html_url: '',
            blog: '',
            email: ''
        }
    }
}

export default UserModel;