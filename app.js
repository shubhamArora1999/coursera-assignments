(function()
{
'use strict';
angular.module('DIApp', [])
.controller('MsgController',MsgController);
MsgController.$inject = ['$scope'];
function MsgController ($scope)
{
  $scope.name = "Shubham";
  $scope.stateOfBeing = "after";

  $scope.printMsg = function()
  {
    return "Shubham is a true mastermind";
  };
  $scope.feedShubham = function ()
{
  $scope.stateOfBeing = "workout";
}
}}
)();
