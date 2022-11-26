var mainApp = angular.module("angularApp", ['ngSanitize']);

mainApp.controller("theInfoBase", function ($scope) {
  //load info items and org items
  if (typeof parksFullViews != "undefined") {
    $scope.parks = parksFullViews.parks;
    $scope.currentParkId = $scope.parks[0].id;
  }
 
  if (typeof parkHierarchy != "undefined") {
    $scope.folders = parkHierarchy.folders;
  }
 
  if (typeof qualityIndex != "undefined") {
    $scope.qualities = qualityIndex.qualities;
  }
 
  if (typeof parkAssociations != "undefined") {
    $scope.associations = parkAssociations.associations;  }
 
  if (typeof parkSequences != "undefined") {
    $scope.sequences = parkSequences.sequences;
  }

  //set the initial values of page display variables we use
  //$scope.navType = "hierarchy"
  $scope.pageType = "home"

  //define page display functions
  $scope.setCurrentParkId = function (parkId) {
    $scope.currentParkId = parkId;
  };
  $scope.setCurrentNavType = function (navType) {
    $scope.navType = navType;
  };
  $scope.setCurrentPageNavAndPark = function (pageType, navType, parkId) {
    $scope.pageType = pageType;
    $scope.navType = navType;
    $scope.currentParkId= parkId;
  };
  $scope.setCurrentPageAndNav = function (pageType,navType) {
    $scope.pageType = pageType;
    $scope.navType = navType;
  };


});
