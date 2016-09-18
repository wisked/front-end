var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');


// function puke(obj) {
// 	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
// }
function StartOver () {
	return (
		<div>
			<Link to='/playerOne'>
				<button type="button">Start Over</button>
			</Link>
		</div> 
	)
}

function Results (props) {
	if (props.isLoading) {
		return (
			<Loading text="Wait One moment:)" speed={400} />
		)
	}
	if (props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>It's tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
	<MainContainer>
		<h1>Results</h1>
		<div>
			<UserDetailsWrapper header='Winner'>
				<UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
			</UserDetailsWrapper>
			<UserDetailsWrapper header='Loser'>
				<UserDetails scores={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
			</UserDetailsWrapper>
			<StartOver />
		</div>
	</MainContainer> 
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};

module.exports = Results;