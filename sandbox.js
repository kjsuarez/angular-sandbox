angular.module('sandbox',[
])
.controller('MainCtrl',function($scope){
	$scope.hello = 'world';

	$scope.things = [
		{"id":0, "name":"box", "cool?":"no", "traits":["square","3D"]},
		{"id":1, "name":"paper crane", "cool?":"yes", "traits":["pretty", "imbued with esoteric might"]},
		{"id":2, "name":"so sad", "cool?":"nope", "traits":["I'd rather not talk about it"]}
	]

	$scope.coolestThing = null;

	function anythingCool () {
		return $scope.coolestThing !== null
	}

	function setCoolestThing (thing) {
		$scope.coolestThing = thing;
	}

	function isCoolestThing (thing) {
		return $scope.coolestThing !== null && thing.name === $scope.coolestThing.name;		
	}

	$scope.anythingCool = anythingCool;
	$scope.setCoolestThing = setCoolestThing; //no () important
	$scope.isCoolestThing = isCoolestThing;
});