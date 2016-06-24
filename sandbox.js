angular.module('sandbox',[
])
.controller('MainCtrl',function($scope){
	$scope.hello = 'world';

	$scope.things = [
		{"id":0, "name":"box", "cool":"no", "traits":["square","3D"]},
		{"id":1, "name":"paper crane", "cool":"yes", "traits":["pretty", "imbued with esoteric might"]},
		{"id":2, "name":"so sad", "cool":"nope", "traits":["I'd rather not talk about it"]}
	]

	$scope.coolestThing = null;

	$scope.newThing = {
		"name":'',
		"cool":'',
		"traits":[]	
	};
	$scope.thingFormTraits = [];
	$scope.newTrait = {
		"body":''
	};

	function anythingCool () {
		return $scope.coolestThing !== null
	}

	function setCoolestThing (thing) {
		$scope.coolestThing = thing;
	}

	function isCoolestThing (thing) {
		return $scope.coolestThing !== null && thing.name === $scope.coolestThing.name;		
	}

	function noCool () {
		$scope.coolestThing = null
	}

	$scope.anythingCool = anythingCool;  //no () important
	$scope.setCoolestThing = setCoolestThing; 
	$scope.isCoolestThing = isCoolestThing;
	$scope.noCool = noCool;

	$scope.isCreating = false;
	$scope.isEditing = false;
	$scope.createDropDown = false;
	$scope.editDropDown = false;


	function canCreate () {
		return !anythingCool()
	}

	function canEdit () {
		return anythingCool()
	}

	function resetCreateForm () {
		$scope.newThing = {
		"name":'',
		"cool":'',
		"traits":[]	
		};

		$scope.newTrait = {
			"body":''
		};

		$scope.thingFormTraits = [];
	}


	function resetTraitForm () {
		$scope.newTrait = {
			"body":''
		};

	}

	function switchCreate () {
		$scope.createDropDown = !$scope.createDropDown;
	}

	function switchEdit () {
		$scope.editDropDown = !$scope.editDropDown;
	
	}

	function createThing (thing) {
		x = {"id": $scope.things.length, "name":thing.name, "cool":thing.cool, "traits":$scope.thingFormTraits}
		$scope.things.push(x);
		resetCreateForm();
	}


	function addTraits (trait) {
		$scope.thingFormTraits.push(trait.body)
		resetTraitForm();
	}

	$scope.canCreate = canCreate;
	$scope.canEdit = canEdit;

	$scope.createThing = createThing;
	
	$scope.addTraits = addTraits;

	$scope.switchCreate = switchCreate;
	$scope.switchEdit = switchEdit;
});






