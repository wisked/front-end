var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function puke (object) {
	 return <pre>{JSON.stringify(object, null, ' ')}</pre> 
}
function ConfirmBattle(props) {
	return props.isLoading === true ? 
		<Loading speed={200} text="Loading" /> : 
		<MainContainer>
			<h1>Confirm Players</h1>
			<UserDetailsWrapper header="Player 1">
				<UserDetails info={props.playersInfo[0]}/>
			</UserDetailsWrapper>

			<UserDetailsWrapper header="Player 2">
				<UserDetails info={props.playersInfo[1]}/>
			</UserDetailsWrapper>
			<div>
				<button type="button" onClick={props.onInitialBattle}>
					Initial Battle
				</button>
				<Link to='/playerOne'>
					<button type='button'>Reselect Players</button>
				</Link>
			</div>
		</MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitialBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;