import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

const Index = function() {
	return (
			<div>
				<App />
			</div>
	)
}

ReactDOM.render(<Index />, document.querySelector('.container'));
