app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];
    console.log($scope.post);

    $scope.addComment = function () {
        if (!$scope.content || !$scope.content === "") {
            return;
        }

        $scope.post.comments.push({
            content: $scope.content,
            upvotes: 0
        });

        $scope.content = "";
    };

    $scope.upVoteComment = function (comment) {
        comment.upvotes += 1;
    };

    $scope.content = "";


}]);