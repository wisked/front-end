var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

/*
var DATA = {
	name: "tommy",
	username: "wisked",
	link: 'https://github.com/wisked/'
};

var ProfilePic = React.createClass({
	render: function() {
	// console.log(this.props)
		return (
			<img src={this.props.link} alt="super"/>
		);
	}

});
var Link = React.createClass({
	changeURL: function () {
		window.location.replace(this.props.href);	
	},
	render: function () {
		return (
			<span style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}
			>
				{this.props.children + ' yeee'}
			</span>
		)
	}
});
var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://github.com/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>	
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		)
	}
});
var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic link={this.props.user.link} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});
*/

ReactDOM.render(
	routes,
	document.getElementById('app')
);