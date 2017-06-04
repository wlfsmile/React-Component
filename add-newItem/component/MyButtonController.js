import React,{Component} from 'react';
import {render} from 'react-dom';
import ButtonActions from '../actions/ButtonActions.js';
import MyButton from './MyButton.js';
import ListStore from '../stores/ListStore';


class MyButtonController extends Component{

	// getInitialState(){
	//     return {
	//       items: ListStore.getAll()
	//     };
	// }

	constructor(props){
		super(props);

		this._onChange = this._onChange.bind(this);

		this.state={
			items: ListStore.getAll()
		}
	}

	componentDidMount() {
	    ListStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
	    ListStore.removeChangeListener(this._onChange);
	}

	_onChange() {
	    this.setState({
	      	items: ListStore.getAll()
	    });
	}

	createNewItem(event){
		ButtonActions.addNewItem('new item');
	}

	render(){
		return (
			<MyButton items={this.state.items} onClick={this.createNewItem} />
		);
	}
	
}

export default MyButtonController;