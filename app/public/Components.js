var Components = {
	get Line(){ return require('./Line'); },
	get NoComponet(){ return require('./NoComponet'); },
	get ListGroup(){ return require('../view/ListGroup'); },
	get SceneThree(){ return require('./SceneThree'); },
	get SceneOne(){ return require('./SceneOne'); },
	get SceneTwo(){ return require('./SceneTwo'); },
	get ListItem(){ return require('../view/ListItem'); },
	get SuperText(){ return require('./SuperText'); },
	get FormButton(){ return require('./FormButton'); },
	get RouteMap(){ return require('../navigator/RouteMap'); },
	get NavigationBarRouteMapper(){ return require('../navigator/NavigationBarRouteMapper'); },
	get NavigatorFrame(){ return require('../navigator/NavigatorFrame'); },
	get CustomNavigator(){ return require('./CustomNavigator'); },
	get CustomNavigatorConfig(){ return require('../navigator/CustomNavigatorConfig'); },
	get LinkTo(){ return require('./LinkTo'); },
	get ProductItem(){ return require('./ProductItem'); },
	get HorizontalList(){ return require('./HorizontalList'); },
}

module.exports = Components;
