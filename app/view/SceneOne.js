'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Dimession,
  PixelRatio,
  NetInfo,
  TextInput,
} = ReactNative;

var RouteMap = require('../navigator/RouteMap');

var SceneOne = React.createClass({
  componentDidMount:function(){
    var route = this.props.route;
    var navigator = this.props.navigator;

    route.rightButtonHandler = () => {
      navigator.push(RouteMap('account/account'))
    }
  },
  componentWillUnmount:function(){
    this._listeners && this._listeners.forEach((listener) => {
       listener.remove()
    });
    console.log('SceneOne Unmounted');

  },

  componentWillMount:function(){

    console.log('wow')
    this.setState({
      he:'cool'
    })
  },
  getInitialState:function(){

    console.log('hello');
    return {
      he:'he'
    }
  },
  render:function(){

    console.log('Render!')
    return (
      <View style={{flex:1}}>

          <View>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>{ this.state.he }</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
          </View>


      </View>
    )
  },


})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
    top:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  space:{
    height:10,
    flex:1,
  }
});

module.exports = SceneOne;
