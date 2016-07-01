import Backbone from "backbone";

class UserModel extends Backbone.Model {
    defaults() {
        return {
            avatar_url: '',
            login: '',
            url: ''
        }
    }
}

export default UserModel;