import $ from "jquery"
import _ from "underscore"
import Backbone from "backbone"
import template from "../../template/loginPage.template.html"

class LoginView extends Backbone.View {

    template() {
    return _.template($(template).html());
    }

    render() {
        this.$el.append(this.template());

        console.log(template);
        return this;
    }
}

export default LoginView;