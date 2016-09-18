import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: '/* your JSX code */',
			output: '',
			err: ''
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		let code = e.target.value;

		try {
			this.setState({
				output: babel.transform(code, {
					stage: 0,
					loose: all
				}).code,
				err: ''
		})
		} catch(e) {
			this.setState({
				err: e.message
			})
		}
	}
	render() {
		return (
			<div>
				<header className="header">{this.state.err}</header>
				<div className="container">
					<textarea 
						onChange={this.update}
						defaultValue={this.state.input}
						onFocus={() => {
							this.state.input = ''
						}}
						rows="20"
						cols="100"
						></textarea>
					<pre>{this.state.output}</pre>
				</div>
			</div>
		)
	}
}

export default App;