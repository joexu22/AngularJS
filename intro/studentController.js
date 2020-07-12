mainApp.controller('studentController', function($scope) {
	$scope.student = {
		firstName: "GuanZhou",
		lastName: "Xu",
		fees: 500,
		subjects: [
			{
				name: 'Physics',
				marks: 75
			},
			{
				name: 'Chemistry',
				marks: 65
			},
			{
				name: 'Math',
				marks: 95
			},
			{
				name: 'English',
				marks: 80
			},
			{
				name: 'Chinese',
				marks: 60
			},
		],	
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	}
});