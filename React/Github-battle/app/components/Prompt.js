var React = require('react');
var PropTypes = React.PropTypes;


var Prompt = React.createClass({
	propTypes: {
		header: PropTypes.string.isRequired
	},
	render: function() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<div>
					<form onSubmit={this.props.onSubmitUser}>
						<input
							placeholder="Input name"
							type="text"
							onChange={this.props.onUpdateUser}
							value={this.props.username} 
							/>
						<div>
							<button
								type="submit">
								push
							</button>
						</div>
					</form>
					
				</div>
			</div>
		);
	}

});

module.exports = Prompt;