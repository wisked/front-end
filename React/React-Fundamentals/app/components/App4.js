import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = {
			val: 0
		}
	}
	update() {
		this.setState({val: this.state.val + 1})
	}
	componentDidMount() {
		console.log('did mount')
	}
	render() {
		return (
			<InnerComponent update={this.update}
				{...this.state}	
				{...this.props} />
		)
	}
}
const Button = (props) => {
	<button onClick={props.update}>{props.txt}: {props.val}</button>
}
const Label = (props) => {
	<label onMouseMove={props.update}>{props.txt}: {props.val}</label>
}

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
	render() {
		return (
			<div>
				<LabelMixed txt="Label" />
				<ButtonMixed txt="Button" />
			</div>
		)
	}
}

export default App;