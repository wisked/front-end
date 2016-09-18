import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [
				{id: 1, name: "timmy"},
				{id: 2, name: "john"},
				{id: 3, name: "tim"}
			]
			
		}
	}
	render() {
		let rows = this.state.data.map(person => {
			return <PersonRow data={person} key={person.id} />
		})
		return (
			<div>
				<table>
					<tbody>{rows}</tbody>
				</table>
			</div>
		)		
	}
}
const PersonRow = (props) => {
	return (
		<tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		</tr>
	)
}
export default App;
