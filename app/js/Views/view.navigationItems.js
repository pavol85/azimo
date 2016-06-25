import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";

class NavigationItemsView extends Backbone.View {

    tagName() {
        return 'li';
    }
    get template() {
        return _.template($('#az-nav').html());
    }

    render() {
        var html = this.template(this.model.attributes);

        this.$el.append(html);

        return this;
    }
}

export default NavigationItemsView;