'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
} = ReactNative;

var {
  NavigatorFrame,
  RouteMap
} = require('./app/public/Components')

var NavitagorNew = React.createClass({
  render:function(){
    return (
      <NavigatorFrame
      	initialRoute = { RouteMap('index/index#root') }
      />
    )
  }
})

AppRegistry.registerComponent('NavitagorNew', () => NavitagorNew);
