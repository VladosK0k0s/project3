import React from 'react';
import './Item.css';

class Item extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	apply: false,
	  	deny: false,
	  	chosed: false
	  };
	  this.handleApply = this.handleApply.bind(this);
	  this.handleDeny = this.handleDeny.bind(this);
	}
	handleApply(){
		if(!this.state.chosed){
			if(!this.state.deny)
			this.setState({
				apply: !this.state.apply,
				chosed: !this.state.chosed
			})
			this.props.add(this.props.tree.apply, 'apply');
		}
	}
	handleDeny(){
		if(!this.state.chosed){
			if(!this.state.apply)
			this.setState({
				deny: !this.state.deny,
				chosed: !this.state.chosed
			})
			this.props.add(this.props.tree.deny, 'deny');
		}
	}
	render(){
		return(
       		<div className='Item'>
	       		<div onClick={this.handleApply}>
	       			{
	       				this.state.apply ? 
	       					<img  src={process.env.PUBLIC_URL + 'img/YesChosed.png'} alt='YesC'/>: 
	       					<img  src={process.env.PUBLIC_URL + 'img/YesUnchosed.png' } alt='YesUc'/>
	       			}	       			
	       		</div>
	       		<p>{this.props.item.text}</p>
	       		<div onClick={this.handleDeny}>
	       			{
	       				this.state.deny ? 
	       					<img  src={process.env.PUBLIC_URL + 'img/NoChosed.png'} alt='NoC'/>: 
	       					<img  src={process.env.PUBLIC_URL + 'img/NoUnchosed.png'} alt='NoUc'/>
	       			}	       			
	       		</div>
	       	</div>
		)
	}
}

export default Item;