import React from 'react'

class EggStats extends React.Component {
	


	constructor(props) {
		super(props)

	}

	render() {
		return (

			<div className='eggStats'>
				<div>
					<strong>Age:</strong> {this.props.age}
				</div>
				<div>
					<strong>Gender:</strong> {this.props.gender}
				</div>
				<div>
					<strong>Eggs:</strong> {this.props.eggs}
				</div>
				<div>
					<strong>Life Expectancy: </strong> 
					
				</div>
			</div>
		)

	}
	
}

export default EggStats;