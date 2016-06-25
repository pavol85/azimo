import "materialize-css/bin/materialize.css";
import "./styles/style.less";
import "babel-polyfill";
import "materialize-css/bin/materialize.js";
import Login from "./js/login";
import dom from "./js/dom";
import NavigationView from "./js/Views/view.navigation";
import NavigationCollections from "./js/Collections/collections.navigation";

class Application {

    constructor() {
        this.loginForm();
        this.createNavigationMenu();
        dom.dropdown.dropdown();
    }

    loginForm() {
        var login = new Login(dom.loginVal, dom.passVal);
        dom.loginContent.on('click', '.az-login-action', () => {
            if (login.getLogin()) dom.hidden.fadeOut('slow');
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