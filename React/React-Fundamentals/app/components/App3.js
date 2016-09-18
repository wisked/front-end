import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

	}
	componentWillReceiveProps(nextProps) {
		this.setState({increasing: nextProps.val > this.props.val})	
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('prevprops', {prevProps})
	}
	render() {
		return (
			<button onClick={() => {
				ReactDOM.render(
					<App val={this.props.val+1} />,
					document.getElementById('app')
				)
			}}>{this.props.val}</button>
		)
	}
}

App.defaultProps = {
	val: 0
}

export default App;