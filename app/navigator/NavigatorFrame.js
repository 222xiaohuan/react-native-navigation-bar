'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
  DeviceEventEmitter,
  PixelRatio,
  Animated,
  ScrollView
} = ReactNative;

var {
  RouteMap,
  NavigationBarRouteMapper,
  CustomNavigatorConfig:{
    CustomNavigatorConfig
  },
} = require('../public/Components')

var NavigatorFrame = React.createClass({
  render: function() {
    return (
      <View style={ styles.NavigatorBackground }>
        <Navigator
            initialRoute={ this.props.initialRoute }

            sceneStyle={ styles.NavigatorScene }

            configureScene={( route ) => {

              /*
                处理自定义场景配置
                更多场景配置在CustomNavigatorConfig文件增加
              */
                if(route.sceneConfig){
                  return route.sceneConfig
                } else {
                  return CustomNavigatorConfig
                }
            }}

            navigationBar = {

              //TODO 部分场景隐藏标题栏
              <Navigator.NavigationBar
                routeMapper = { NavigationBarRouteMapper }
                style={ styles.NavigationBar }
              />
            }

            renderScene={( route, navigator ) => {
              if( route.component ){//

                console.log('renderScene', route);
                return this.getInnerView( route, navigator )
              }
            }}
         />
      </View>
     );
  },
  getInnerView:function( route:object, navigator:object ){
    var ViewComponent = route.component;

    return (
        <ViewComponent
          route = { route }
          navigator = { navigator }
          { ...this.props }
        />
    )
  }
});


var styles = StyleSheet.create({
  NavigatorBackground:{
    flex:1,
    backgroundColor:'#000'
  },
  NavigatorScene:{
    flex:1,
    overflow:"visible",
    shadowColor:'#444',
    shadowOffset:{
      width: -4
    },
    shadowOpacity:0.2,
    top:64,
    backgroundColor:'white'
  },
  NavigationBar:{
    backgroundColor:'#a09d78',
    borderBottomWidth:1 / PixelRatio.get(),
    borderBottomColor:'#969696',
    flex:1,
  }
})


module.exports = NavigatorFrame
