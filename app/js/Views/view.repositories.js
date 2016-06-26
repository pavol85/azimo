import $ from "jquery";
import Backbone from "backbone";
import RepositoryView from "./view.repository";

class RepositoriesView extends Backbone.View {

    get tagName() {
        return 'ul';
    }

    get className() {
        return 'collection'
    }

    initialize() {
        this.render();
    }

    render() {
        this.collection.each(this.addOne, this);
        
        $("#az-repositories").append(this.el);
    }

    addOne(model) {
        var view = new RepositoryView({model: model});
        this.$el.append(view.render().el);
    }
}

export default RepositoriesView;