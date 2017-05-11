import React,{Component} from 'react';
import '../css/Header.css';

class Header extends Component{
	getTitle(){
		return (
			<div className="headerTitle">
				<h1 className="headerTitle-word">文章标题</h1>
			</div>
		);
	}
	render(){
		return (
			<div className="header">
				{this.getTitle()}
			</div>
		);
	}
}

export default Header;