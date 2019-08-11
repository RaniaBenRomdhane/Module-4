(function (){
'strict use';
angular.module('data')
.controller('ItemsForCategoryController', ItemsForCategoryController);

ItemsForCategoryController.$inject=['items'];
function ItemsForCategoryController(items){
  var itemsforcategory=this;
  itemsforcategory.itemsList=items
  //itemsforcategory.$onInit=function () {
  //  MenuDataService.getItemsForCategory().then(function(data){
    //itemsforcategory.itemsList=data;
//    console.log(itemsforcategory.itemsList[2]);
//  }).catch(function(){console.log("K")});
};




})();
