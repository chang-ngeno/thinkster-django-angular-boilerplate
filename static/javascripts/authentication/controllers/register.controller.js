/**
 * Register controller
 * @namespace thinkster.authentication.controllers
 */
(function () {
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication', '$filter'];

    /**
     * @namespace RegisterController
     */
    function RegisterController($location, $scope, Authentication) {
        let vm = this;

        vm.register = register;
        vm.message = {};


        //let myArray = [{'id':'73','name':'john'},{'id':'45','name':'Jass'}]
        let myFilter = {'id': 73};
        var myArray = [{'id': '73', 'name': 'john'}, {'id': '45', 'name': 'Jass'}]

        var item73 = myArray.filter(function (item) {
            return item.id === '73';
        })[0];

        //$filter('filter')(myArray, {'id':73}) ;
        /**
         * @name register
         * @desc Register a new user
         * @memberOf thinkster.authentication.controllers.RegisterController
         */
        function register() {
            Authentication
                .register(vm.email, vm.password, vm.username)
                .then(resp => {
                    //console.log(resp);
                    vm.message.code = 'success';
                    vm.message.body = {status: resp.status, message: "Account created successfully!"};
                    vm.email = '';
                    vm.password = '';
                    vm.username = '';
                })
                .catch(resp => {
                    //console.log(resp);
                    vm.message.code = 'danger';
                    vm.message.body = resp.data;
                });
            //console.log(vm.message);
            //alert(JSON.stringify(vm.message));
        }
    }
})();