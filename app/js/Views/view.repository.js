import _ from "underscore";
import Backbone from "backbone";
import html from "./../../templates/repository.template.html";
import Confirm from "./../tools/confirm";

class RepositoryView extends Backbone.View {

    tagName() {
        return 'li';
    }

    get className() {
        return 'collection-item avatar'
    }

    get template() {
        return _.template($(html).html());
    }

    get events() {
        return {
            "click .material-icons": "selectIcon",
            "mouseover .material-icons": "changeColor"
        };
    }

    selectIcon() {
        let confirm = new Confirm({
            title: 'Change assessment',
            message: 'Are you sure?',
            yesBtn: 'Yes',
            noBtn: 'No'
        });

        $.when(confirm.showConfirmationWindow()).then((confirmed) => {
            if (confirmed) {
                console.log('change assessment');
            }
        });
    }

    changeColor(e) {

    }

    render() {
        var html = this.template(this.model);
        this.$el.append(html);


        return this;
    }
}

export default RepositoryView;