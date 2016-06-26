import $ from 'jquery';
import confirmTemplate from '../../templates/confirm.template.html';

class Confirm {

    template() {
        return $('body').prepend(confirmTemplate);
    }

    showConfirmationWindow(message) {
        return this.showWindow(this.template(), message);
    };

    showWindow(temp, message) {
        var dfd = new $.Deferred();
        var result = false;
        let template = temp.find('.modal');

        template.show();
        let confirmYes = template.find('a.confirm_yes');
        let confirmNo = template.find('a.confirm_no');

        template.find('p').html(message);
        confirmYes.click(() => {
            result = true;
            template.hide();
        });
        confirmNo.click(() => {
            template.hide();
        });

        return dfd.promise();
    };
}

export default Confirm