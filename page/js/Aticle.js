import React,{Component} from 'react';
import $ from 'jquery';
import AticleHeader from './AticleHeader.js';
import AticleContent from './AticleContent.js';
import '../css/Aticle.css';

class Aticle extends Component{

	constructor(props){
		super(props);
		this.state = {
			aticleTitle : "",
			aticleTime : "",
			aticleContent : "",
			aticleAuthor : "",
		};
	}

	componentDidMount(){
		var self = this;
		$.ajax({
			type : "GET",
			url : "http://rapapi.org/mockjsdata/17704/aticleInfo/"+this.props.params.id,
			success : (data)=>{
				var aticleData = data;
				self.setState({
					aticleTitle : aticleData.aticleTitle,
					aticleTime : aticleData.aticleTime,
					aticleContent : aticleData.aticleContent,
					aticleAuthor : aticleData.aticleAuthor,
				});
			}
		})
	}

	render(){
		return(
			<div className="aticle">
				<AticleHeader {...this.state} />
				<AticleContent {...this.state} />
				<div className="aticleTime">
					{this.state.aticleTime}
				</div>
			</div>
		);
	}
}

export default Aticle;