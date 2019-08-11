(function (){
'strict use';
angular.module('data')
.controller('DataController', DataController);

DataController.$inject=['mainList'];
function DataController(mainList){
  var listData=this;
  listData.categories=mainList;
  //listData.$onInit= function(){
  //mainList.then(function(response){
  //listData.categories=response;
  //       }).catch(function(error){console.log("there is smthg wrooong !!");}
  //  );
  // };

  //listData.clear = function(){
  // for(var i=0; i<listData.categories.length;i++)
  //listData.categories.splice(i,1);};


  //listData.getItems =function (itemIndex){
  //var ch=listData.categories[itemIndex].shortName;
  //listData.items= MenuDataService.getItemsForCategory(ch);};


}
})();
