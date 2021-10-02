(function (window) {
    'use strict';
    var PAYMENT_SELECTOR = '[payment="form"]';

    var App = window.App;
    var FormHandler = App.FormHandler;
    var paymentformHandler = new FormHandler(PAYMENT_SELECTOR);
    paymentformHandler.addSubmitHandler(function(data){
        var dialogbox = document.querySelector('[Payment-message = "response"]');
        console.log(dialogbox.textContent);
        dialogbox.textContent = "Thank you for your payment, " +  data['title']+ " " + data['username'];
        console.log(dialogbox.textContent);
        $('#pop-up').modal({
            show: 'true'
        });
    });

    console.log(paymentformHandler);

})(window);