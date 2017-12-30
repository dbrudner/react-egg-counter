import React, { Component } from 'react';
import Age from './age'
import DailyEggs from './dailyEggs'
import Gender from './gender'
import SubmitButton from './submitButton'
import EggStats from './eggStats'

export default class App extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			age: '25',
			eggs: '2',
			gender: 'Female'
		};
	}

	getAge(age) {
		this.setState({
			age: age	
		})
	}

	getEggs(eggs) {
		this.setState({
			eggs: eggs	
		})
	}

	getGender(gender) {
		this.setState({
			gender: gender	
		})
	}

	render() {
		return (
		  <div>
		  	<Age onAgeChange={(age) => this.getAge(age)} />
		  	<DailyEggs onEggsChange={(eggs) => this.getEggs(eggs)}/>
		  	<Gender onGenderChange={(gender) => this.getGender(gender)}/>
		 
		  	<EggStats age={this.state.age} eggs={this.state.eggs} gender={this.state.gender}/>
		  </div>
		);
	}
}