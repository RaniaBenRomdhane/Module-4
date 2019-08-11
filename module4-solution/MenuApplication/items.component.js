(function(){
'use strict';

angular.module('data')
.component('items',{
  templateUrl:'/MenuApplication/showItems.html',
  bindings:{
    items :'<'
}


});

})();
