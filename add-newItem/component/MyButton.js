import React,{Component} from 'react';
import {render} from 'react-dom';

class MyButton extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return( 
			<div>
				<ul>
					{
						this.props.items.map(function (listItem, i) {
						 	return <li key={i}>{listItem}</li>;
						})
					}
				</ul>
			   		<button onClick={this.props.onClick}>New Item</button>
		 	</div>
		);
	}
}

export default MyButton;