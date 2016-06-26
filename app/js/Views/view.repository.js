import _ from "underscore";
import Backbone from "backbone";
import html from "./../../templates/repository.template.html";

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

    render() {
        var html = this.template(this.model.attributes);
        this.$el.append(html);


        return this;
    }
}

export default RepositoryView;