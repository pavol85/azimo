import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import template from "./../../templates/login.template.html";

class LoginView extends Backbone.View {

    constructor() {
        super();
        this.render();
    }

    get username() {
        return $('input#login').val();
    }

    get pass() {
        return $('input#password').val();
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
        if (this.username.length > 2 && this.pass.length > 2) return true;

        this.getNotification('Incorrect username or password')
    }

    getAuthenticate() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/user",
            dataType: 'json',
            async: false,
            headers: {
                "Authorization": "Basic " + btoa(this.username + ":" + this.pass)
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
        this.$el.html(this.template);
        $("#az-login").append(this.$el);
    }
}

export default LoginView;