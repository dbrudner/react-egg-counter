import React from 'react'
import LifeExpectancy from './lifeExpectancy'

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
					<LifeExpectancy gender={this.props.gender} age={this.props.age} eggs={this.props.eggs}/>
				</div>
			</div>
		)

	}
	
}

export default EggStats;