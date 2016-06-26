import "materialize-css/bin/materialize.css";
import "./styles/style.less";
import "babel-polyfill";
import $ from 'jquery';
import "materialize-css/bin/materialize.js";
import Login from "./js/login";
// import dom from "./js/dom";
import NavigationView from "./js/Views/view.navigation";
import NavigationCollections from "./js/Collections/collections.navigation";
import appTemplate from './templates/app.template.html';
import loginTemplate from "./templates/login.template.html";

class Application {

    constructor() {
       $("body").prepend(appTemplate);
        this.loginForm();
        this.createNavigationMenu();
    }

    loginForm() {
        var login = new Login($('#az-login').find('input#login').val(), $('#az-login').find('input#password').val());
        $("#az-login").append(loginTemplate);

        $('#az-login').on('click', '.az-login-action', () => {
            if (login.getLogin()) $('.az-must-hidden').fadeOut('slow');
        });
    }

    createNavigationMenu() {
        let navigationView = new NavigationView({
            collection: new NavigationCollections([
                {
                    name: 'Languages',
                    iconClass: 'arrow_drop_down'
                }
            ])
        });

    }
}

$(() => {
    new Application();
});