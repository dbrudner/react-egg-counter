import React, { Component } from 'react'

class Gender extends Component {
	constructor(props) {
		super(props);

		this.state = { gender: ''}
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(gender) {
		this.setState({ dailyEggs: event.target.value })
		this.props.onGenderChange(gender)
	}

	render() {
		return (
			<div>
				<label>
					<stat>Gender</stat>
					<select onChange={event => this.onInputChange(event.target.value)}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</label>
			</div>
		)
	}
}

export default Gender