import React,{Component} from 'react';
import { Link } from 'react-router';
import '../css/ContentItem.css';

class ContentItem extends Component{

	constructor(props){
		super(props);
	}
	
	render(){
		const {title,key,titleId} = this.props;
		return(
			<div className="contentItem" key={key} >
				<Link to={"/aticle/"+titleId} className="contentItem-titleLink" >{title}</Link>
			</div>
		);
	}
}

export default ContentItem;