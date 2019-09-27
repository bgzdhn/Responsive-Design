import React from 'react';

export class Home extends React.Component{
	render() {
		return(
		<div className="row">
			<div className="col-4">
				<nav className="nav">
					<a className="nav-link" href="#">Home</a>
					<a className="nav-link" href="#">Features</a>
					<a className="nav-link" href="#">Pricing</a>
				</nav>
			</div>
		</div>
		);
	}
}