var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user) {
	 return (
	 	<div>
	 		{!!user.scores && <li><h3>Score: {user.scores}</h3></li>}
	 		<li><img src={user.info.avatar_url}/></li>
	 		<li>Username: {user.info.login}</li>
	 		<li>Folowers: {user.info.followers}</li>
	 		<li>Folowing: {user.info.following}</li>
	 		<li>Public Repos: {user.info.public_repos}</li>
	 	</div>
 	) 
}
UserDetails.propTypes = {
	score: PropTypes.number
};
module.exports = UserDetails;