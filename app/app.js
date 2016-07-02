import "materialize-css/bin/materialize.css";
import "./styles/style.less";
import "babel-polyfill";
import $ from "jquery";
import "materialize-css/bin/materialize.js";
import RepositoriesView from "./js/Views/view.repositories";
import RepositoriesCollections from "./js/Collections/collections.repositories";
import LoginView from "./js/Views/view.login";
import UserModel from "./js/Models/model.user";
import UserView from "./js/Views/view.user";
import Session from "./js/tools/Session";

class Application {

    constructor() {
        var session = new Session();
        if (session.sessionIsset()) {
            $('.az-must-hidden').hide();
            var userModel = new UserModel(session.getUser());
            var userView = new UserView(userModel);
        } else {
            this.loginForm();
        }

        $('body').on('keypress', '#search', (e) => {
            if (e.which == 13) {
                this.searchee(e.currentTarget.value);

                return false;
            }
        });
    }


    searchee(query) {
        var s = new RepositoriesCollections();
        s.url = 'https://api.github.com/search/repositories?q=' + query;
        s.fetch({
            success: (collection, response, options) => this.createRepositories(collection)
        });
    }

    loginForm() {
        var view = new LoginView();
    }

    createRepositories(collection) {
        // var result = collection.models;
        // console.log("createRepositories", collection, result);
        var repositoriesView = new RepositoriesView({collection: collection});
    }
}

$(() => {
    new Application();
});