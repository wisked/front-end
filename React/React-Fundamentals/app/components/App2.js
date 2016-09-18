import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		}
		console.log('set state')
		this.update = this.update.bind(this)
	}
	update() {
		this.setState({val: this.state.val + 1})
	}
	componentWillMount() {
		this.setState({ m: 2})
	}
	render() {
		console.log('render!');
		return <button onClick={this.update}>{this.state.val * this.state.m}</button>
	}
	componentDidMount() {
		console.log('mounted')
		this.int = setInterval(this.update, 500);
	}
	componentWillUnmount() {
		console.log('unmount')
		clearInterval(this.int)
	}
}

class Wrapper extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<button onClick={()=>{
					ReactDOM.render(
						<App />,
						document.getElementById('container')
						)
				}}>Mount</button>
				<button onClick={()=>{
					ReactDOM.unmountComponentAtNode(document.getElementById('container'))
				}}>Unmount</button>
				<div id="container"></div>
			</div>
		)
	}
}
export default Wrapper;