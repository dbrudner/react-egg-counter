import React from 'react'

class DailyEggs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {dailyEggs: ''}

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(eggs) {
		this.setState({ eggs: eggs })
		this.props.onEggsChange(eggs)
	}

	render() {
		return (
			<div>
				<label>
					<stat>DailyEggs</stat>
					<input onChange={event => this.onInputChange(event.target.value)} type="text" name="age" />
				</label>
			</div>
		)
	}
}

export default DailyEggs