import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import htmlTemplate from './../../templates/navigationitems.template.html'

class NavigationItemsView extends Backbone.View {

    tagName() {
        return 'li';
    }
    get template() {
        return _.template($(htmlTemplate).html());
    }

    render() {
        var html = this.template(this.model.attributes);

        this.$el.append(html);
        

        return this;
    }
}

export default NavigationItemsView;