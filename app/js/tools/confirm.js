import $ from 'jquery';
import confirmTemplate from '../../templates/confirm.template.html';

class Confirm {

    constructor(options) {
        this.title = options.title || '';
        this.yesBtn = options.yesBtn || 'Yes';
        this.noBtn = options.noBtn || 'No';
        this.message = options.message || '';

    }

    template() {
        return $('body').prepend(confirmTemplate);
    }

    showConfirmationWindow() {
        var dfd = new $.Deferred();
        var result = false;
        let template = this.template().find('.modal');
        let confirmYes = template.find('a.confirm_yes');
        let confirmNo = template.find('a.confirm_no');

        template.find('h4').html(this.title);
        template.find('p').html(this.message);
        confirmNo.html(this.noBtn);
        confirmYes.html(this.yesBtn);

        template.show();

        confirmYes.click(() => {
            result = true;
            template.hide();
            dfd.resolve(true);

        });
        confirmNo.click(() => {
            template.hide();

        });

        return dfd.promise();
    };
}

export default Confirm