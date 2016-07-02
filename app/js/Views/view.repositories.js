import $ from "jquery";
import Backbone from "backbone";
import RepositoryView from "./view.repository";
import RepositoryCollection from "./../Collections/collections.repositories";

class RepositoriesView extends Backbone.View {

    constructor(params) {
        super(params);
        this.listenTo(this.collection, 'change', this.render);
    }

    get tagName() {
        return 'ul';
    }

    get className() {
        return 'collection'
    }

    initialize() {
        this.render();
    }

    getLengthResult() {
        let count = this.collection.length;
        if(count) {
            return '<h4>Found '+ this.collection.length + ' repositories</h4>';
        }

        return '<h4>No found repositories</h4>';
    }

    render() {
        $("#az-repositories").empty();
        this.collection.each(this.addOne, this);
        
        $("#az-repositories").append(this.el);
        $("#az-repositories").prepend(this.getLengthResult());
    }

    addOne(model) {
        var view = new RepositoryView({model: model.toJSON()});
        this.$el.append(view.render().el);
    }
}

export default RepositoriesView;