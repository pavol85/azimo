import $ from "jquery";
import Backbone from "backbone";
import NavigationItemsView from "./view.navigationItems";

class NavigationView extends Backbone.View {

    get tagName() {
        return 'ul';
    }

    get className() {
        return 'right hide-on-med-and-down'
    }

    initialize() {
        this.render();
    }

    render() {
        this.collection.each(this.addOne, this);

        $("#az-nav-ul").append(this.el);
    }

    addOne(model) {
        var view = new NavigationItemsView({model: model});
        this.$el.append(view.render().el);
    }
}

export default NavigationView;