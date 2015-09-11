/**
 * Created by saketmohan on 8/12/15.
 */

( function(){

    var app = angular.module('testApp1', ['ngMessages']);
    app.controller('MainCtrl', MainController);

    function MainController() {

        var mctrl = this;
        mctrl.name='Design';
        mctrl.details = [

            {"name": "Test Task #1",
                "date": "12/01/2012",
                "assigned": "John Doe" },

            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
            {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
            {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
            {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
            {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }

        ];

mctrl.addPerson = function() {
    mctrl.details.push(mctrl.newPerson);
    mctrl.newPerson = null;
};
}


})();