import React from 'react'

class Age extends React.Component {
	constructor(props) {
		super(props)
		this.state = {age: ''}

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(age) {
		this.setState({ age: age })
		this.props.onAgeChange(age)
	}

	render() {
		return (
			<div>
				<label>
					<stat>Age</stat>
					<input onChange={event => this.onInputChange(event.target.value)} type="text" name="age" />
				</label>
			</div>
		)
	}
}

export default Age