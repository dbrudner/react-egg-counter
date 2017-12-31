import React from 'react'

function LifeExpectancy(props) {
	
	const gender = props.gender;
	const age = props.age;
	const eggs = props.eggs;

	if (gender === "Male") {
		return (
					<div>
						<div><strong>Average Life Expectancy:</strong> 76.4 years</div>
						<div>You will eat {Math.floor((76.4 - age)*eggs*365).toString()} eggs from now until the day you die.</div>
					</div>

		)
	}
	else {
		return (
				<div>
					<div><strong>Average Life Expectancy:</strong> 81.2 years</div>
					<div>You will eat {Math.floor((81.2 - age)*eggs*365).toString()} eggs from now until the day you die.</div>
				</div>
		)
	}


}

export default LifeExpectancy