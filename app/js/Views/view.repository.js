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
        const message = 'Are you sure assessment?';
        var confirm = new Confirm();
        confirm.showConfirmationWindow(message).then((confirmed) => {
            console.log(arguments);
            if (confirmed) {
                console.info('Change assessment')
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