'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = [];
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    $scope.posts.push($scope.post);
    $scope.post = {url: 'http://', title: ''};
  };
});