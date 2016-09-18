var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');


var Home = React.createClass({

	render: function() {
		return (
			<MainContainer>
				<h1>GitHub battle</h1>
				<Link to='/playerOne'>
					<button type='button'>Get started</button>
				</Link>
			</MainContainer>
		);
	}

});

module.exports = Home;