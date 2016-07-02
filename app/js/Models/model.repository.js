import Backbone from "backbone";

class RepositoryModel extends Backbone.Model {
    defaults() {
        return {
            owner : {
                avatar_url: '',
                login: '',
            },
            html_url: '',
            stargazers_count: null
        }
    }

}

export default RepositoryModel;