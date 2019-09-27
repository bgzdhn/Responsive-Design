import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './components/Home';
import {Body} from './components/Body';

class App extends  React.Component{
	render() {
		return (
			<div>			
				<Home/>
				<Body />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));