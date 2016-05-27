var React = require('react');
var ReactNative = require('react-native');

var {
  View,
  PixelRatio,
} = ReactNative


var Line = React.createClass({
  render:function(){
    return (
      <View style={{
        height:1/PixelRatio.get(),
        width:300,
        alignSelf:'flex-end',
        backgroundColor:'#ddd',
      }}></View>
    )
  }
})


module.exports = Line;
