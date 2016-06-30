import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import template from "./../../templates/login.template.html";
import LoginModel from "./../Models/model.login";

class LoginView extends Backbone.View {

    constructor() {
        super();
        this.model = new LoginModel;
        this.render();
    }

    get className() {
        return 'container blue-grey-text text-lighten-1';
    }

    get template() {
        return _.template($(template).html());
    }

    get events() {
        return {
            "click .az-login-action": "onLogin",
            "keyup input.az-keyup": "onKeyupInput"
        };
    }

    onLogin() {
        console.log(this.validateParams());
        if (this.validateParams()) this.getAuthenticate();
    }

    onKeyupInput(e) {
        const enterKey = 13;

        let key = e.keyCode || e.which;

        if (key == enterKey && this.validateParams()) {
            e.preventDefault();
        } else if (key == enterKey) {
            e.preventDefault();
            this.getAuthenticate();

            return false;
        }
    }

    validateParams() {
        console.log(this.model.get('username'));
        if (this.model.username.length > 2 && this.model.pass.length > 2) return true;

        this.getNotification('Incorrect username or password')
    }

    getAuthenticate() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/user",
            dataType: 'json',
            async: false,
            headers: {
                "Authorization": "Basic " + btoa(this.model.username + ":" + this.model.pass)
            },
            success: function (response) {
                console.log(response);
            }
        });
    }

    getNotification(message) {
        console.log(message);
    }

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        $("#az-login").append(this.$el);
    }
}

export default LoginView;