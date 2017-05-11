import React,{Component} from 'react';
import $ from 'jquery';
import '../css/Page.css';

class Page extends Component{

	constructor(props){
		super(props);
	}


	render(){
		let self = this;
		let pageItem = [];
		for(let i=1;i<=this.props.totalPage;i++){
			pageItem.push(i);
		}
		const {key,current} = this.props; 
		return (
			<div className="page">
				<ul className="pageShow clearfix">
					<li onClick={this.props.setPrev} className="pagePrev">上一页</li>
					{
						pageItem.map((i)=>{
							return <li className="pageShow_li" key={i} onClick={self.props.changePage(i)} >{i}</li>;
						})
					}
					<li onClick={this.props.setNext} className="pageNext">下一页</li>
				</ul>
			</div>
		);
	}
}

export default Page;