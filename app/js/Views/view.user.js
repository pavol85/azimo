import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import template from "./../../templates/user.template.html";
import UserModel from "./../Models/model.user";
import Confirm from "./../tools/confirm";

class UserView extends Backbone.View {

    constructor(model) {
        super();
        this.model = model ? model : new UserModel;
        this.render();
    }

    get template() {
        return _.template($(template).html());
    }

    get events() {
        return {
            "click img": "onInfo",
            "click .az-git-login": "onInfo"
        };
    }

    onInfo() {
        let confirm = new Confirm({
            title: this.model.get('login'),
            message: "Other message",
            yesBtn: 'Yes,I want logout',
            noBtn: 'Cancel'
        });

        confirm.showConfirmationWindow();
    }

    getNotification(message) {
        console.log(message);
    }

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        $("#az-user-info").append(this.$el);
    }
}

export default UserView;