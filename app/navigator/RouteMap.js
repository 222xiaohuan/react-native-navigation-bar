var { getBackButton } = require('../navigator/NavgationBarCustomElements');
var {  Navigator } = require('react-native');
var {  CustomNavigatorConfig } = require('../public/Components');

var RouteMap = {
  "index/index#root":() => {
    return (
      {
        name: 'WelcomeView',
        title:'Index',
        component:require('../view/SceneOne'),
        rightButton:'SceneOne',
      }
    )
  },
  "index/index":() => {
    return (
      {
        name: 'WelcomeView',
        title:'Index',
        component:require('../view/SceneOne'),
        rightButton:'SceneOne',
        leftButton:getBackButton({text:"Back"}),
      }
    )
  },
  "root":() => {
    return (
      {
        title:'Root',
        component:require('./RootScene'),
        rightButton:'Login',
      }
    )
  },
  "account/account" : () => {
    return (
      {
        name: 'WelcomeView',
        title:'My Account',
        component:require('../view/SceneTwo'),
        rightButton:'SceneTwo',
        leftButton:getBackButton({text:"Back"}),
      }
    )
  },
  "setting":() => {
    return ({
      name: 'WelcomeView',
      title:'Setting',
      component:require('../view/SceneThree'),
      rightButton:'SceneThree',
      leftButton:getBackButton({text:"Back"}),
      sceneConfig:CustomNavigatorConfig.CustomNavigatorConfigWithoutGesture

    })
  },
  "success":() => {
    return ({
      name: 'Wunderful',
      title:'Success',
      component:require('../view/CompleteScene'),
      rightButton:'CompleteScene',
    })
  },
  "fixed/buy":() => {
    return ({
      name: 'Wunderful',
      title:'Buy',
      component:require('../view/NoComponet'),
    })
  }
}

var getRoute = function(routeName){

  // var defaultScene = {
  //   title:'ERROR',
  //   component:<View></View>
  // };

  return  RouteMap[routeName]()
}

module.exports = getRoute;
