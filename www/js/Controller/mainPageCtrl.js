atyaatAppModule.controller('mainPageController',function($scope , $ionicSideMenuDelegate,$ionicPopup){
  $scope.showbutton=false

  $scope.sideMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.fields=[
    "عطیات","صدقات","زکوٰۃ","فدیہ","فطرہ","تعمیِر مسجد",
   ];
  $scope.fieldIndex = function (index){
    $scope.showbutton = true;
    //console.log(index)
    if(index == 0){
      $ionicPopup.alert({
        template:'عطیات'
      });
    }
    else if(index == 1){
      $ionicPopup.alert({
        template:'صدقات'
      });
    }
    else if(index == 2){
      $ionicPopup.alert({
        template:'زکوٰۃ'
      });
    }
    else if(index == 3){
      $ionicPopup.alert({
        template:'فدیہ'
      });
    }
    else if(index == 4){
      $ionicPopup.alert({
        template:'فطرہ'
      });
    }
    else if(index == 5){
      $ionicPopup.alert({
        template:'تعمیِر مسجد'
      });
    }
  }



});
