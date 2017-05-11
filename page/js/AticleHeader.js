import React,{Component} from 'react';
import '../css/AticleHeader.css';

class AticleHeader extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {aticleTitle,aticleAuthor} = this.props;
		return (
			<div className="aticleHeader">
				<div className="aticleTitle">
					{aticleTitle}
				</div>
				<div className="aticleAuthor">
					By  {aticleAuthor}
				</div>
			</div>
		);
	}
}

export default AticleHeader;