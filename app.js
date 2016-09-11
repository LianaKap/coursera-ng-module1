(function(){
'use strict';
angular.module('lunchChecker',[])
.controller('lunchCheckerController', lunchCheckerController);
lunchCheckerController.$inject = ['$scope'];
function lunchCheckerController($scope){

 $scope.message = " ";
 $scope.lunchMessage = function (){
   var lunch=$scope.lunch;
   lunch = fixLunch(lunch);

   if (lunch.length==0) {
     $scope.message="Please enter data first";

   } else {
     var meals = chenkNumOfMeals(lunch);
     if (meals<4) {
          $scope.message="Enjoy!";
     } else {
         $scope.message="Too much!";
     }

   }

 };
 function chenkNumOfMeals(string){
    var meals = string.split(",");
    meals = meals.filter(realMeal);
    var numberOfMeals = meals.length;
    return numberOfMeals;
 };

 //trims the spaces
 //and checks that lunch doesn't start or end with comma
 //which will mess up the meal count
 function fixLunch(string){
   string = string.trim();
   if (string.startsWith(",")) {
     string = string.substring(1,string.length);
   }
   if (string.endsWith(",")) {
     string = string.substring(0,(string.length-1));
   }
   return string;
 }

 //makes sure there are meals between every comma
 function realMeal(string){
   string = string.trim();
   return string.length>0;
 }



}

})();
