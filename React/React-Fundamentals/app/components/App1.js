import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0
			
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
		})
	}
	render() {
		return (
			<div>
				<NumInput ref="red" 
					min={0}
					max={255}
					step={1}
					type='range'
					label="red"
					val={+this.state.red}
					update={this.update} />
				
				<br />
				<Button><Symbol /></Button>
			</div>
		)		
	}
}

class NumInput extends React.Component {
	render() {
		let label = this.props.label !== '' ? <label>{this.props.label} - 
		{this.props.val}</label> : ''
		return (
			<div>
				{label}
				<input ref="inp" 
					type={this.props.type}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					defaultValue={this.props.val}
					onChange={this.props.update} />
			</div>
		)
	}
}

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}
NumInput.defaultProps = {
	min: 0,
	max: 255,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
}


class Button extends React.Component {
	render() {
		return (
			<button>{this.props.children}</button>
		)
	}
}
const Symbol = () => <span>&#9742;</span>


class Slider extends React.Component {
	
	render() {
		return (
		<div>
			<input ref="inp" 
				type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
		</div>
		)
	}
}

const Widget = (props) => {
	return (
		<div>
			<input type="text"
				onChange={props.update} />
			<h1>{props.txt}</h1>
		</div>
	)
}

export default App;