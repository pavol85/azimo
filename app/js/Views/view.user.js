import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import template from "./../../templates/user.template.html";
import templateMessage from "./../../templates/user.message.confirm.template.html";
import UserModel from "./../Models/model.user";
import Confirm from "./../tools/confirm";
import Session from "./../tools/Session";

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

    createTitleConfirm() {
        let scaffold = $('<div>');
        let img = $('<img id="responsive-img">');
        img.attr('src', this.model.get('avatar_url'));
        img.attr('width', '40');
        img.css({
            'float': 'left',
            'marginRight': '10px'
        });
        img.appendTo(scaffold);
        scaffold.append(this.model.get('login'));

        return scaffold;
    }

    createMessageConfirm() {
        let scaffold = $('<div>');
        let template = _.template($(templateMessage).html());

        scaffold.html(template(this.model.toJSON()));

        return scaffold;
    }

    onInfo() {
        let confirm = new Confirm({
            title: this.createTitleConfirm(),
            message: this.createMessageConfirm(),
            yesBtn: 'Yes,I want logout',
            noBtn: 'Cancel'
        });

        $.when(confirm.showConfirmationWindow()).then((confirmed) => {
            if (confirmed) {
                let session = new Session();

                session.removeSession();
                window.location.reload();
            }
        });
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