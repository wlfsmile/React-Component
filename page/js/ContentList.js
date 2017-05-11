import React,{Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import ContentItem from './ContentItem.js';
import Header from './Header.js';
import Page from './Page.js';
import '../css/ContentList.css';

class ContentList extends Component{
	
	constructor(props){
		super(props);
		this.setPage = this.setPage.bind(this);
		this.setPrev = this.setPrev.bind(this);
		this.setNext = this.setNext.bind(this);
		this.changePage = this.changePage.bind(this);
		this.state = {
			itemData : [],
			totalPage: 0,
			current : 1,
			key : 0,
		};

	}


	componentDidMount(){
		var that = this;
		$.ajax({
			type : "GET",
			url: "http://rapapi.org/mockjsdata/17704/Info/1",
			success : (data) => {
				var items = data;
				that.setState({
					itemData : items.totalData,
					totalPage : items.totalPage,
					current : items.current,
				});
			},
		}) 
	}

	setPage(num){
		var data1='';
		var that = this;
		var url = "http://rapapi.org/mockjsdata/17704/Info/"+num;
		$.ajax({
			type : "GET",
			url : url,
			success : (data) => {
				data1=data;
			},
		}).then(() => {
			that.setState({
				itemData : data1.totalData,
			})
		});
	}

	setPrev(){
		if(this.state.current > 1){
			this.setState({
				current : this.state.current - 1,
			},()=>{  
				this.setPage(this.state.current);
			})
		}else{
			alert("已经是第一页了");
		}
	}

	setNext(){
		if(this.state.current < this.state.totalPage){
			this.setState({
				current : this.state.current + 1,
			},()=>{  
				this.setPage(this.state.current);
			})
		}else{
			alert("已经是最后一页了");
		}
	}

	changePage(e){
		let self = this;
		return ()=>{
			self.setState({
				current : e,
			},()=>{
				this.setPage(this.state.current);
			})
		}
	}

	render(){
		return (
			<div>
				<Header />
				<div className="contentItems">
				{
					this.state.itemData.map((count)=>{
						return <ContentItem {...count} />
					})
				}
				</div>
				<Page {...this.state} setPage={this.setPage} setNext={this.setNext} setPrev={this.setPrev} changePage={this.changePage} />
			</div>
		);
	}
}

export default ContentList;