import React from 'react';
import './Item.scss';
import img from './Chosed.png';

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
			}, this.props.add(this.props.tree.apply, true, this.props.id))
		}
		else{
			if(!this.state.apply) {
				this.setState({
					deny: true,
					apply: false,
				}, this.props.rem(this.props.tree.apply, true, this.props.id))
			}
		
		}
	}
	handleDeny(){
		if(!this.state.chosed){
			if(!this.state.apply)
				this.setState({
					deny: !this.state.deny,
					chosed: !this.state.chosed
				});
				this.props.add(this.props.tree.deny, false, this.props.id);
		}
		else{
			if(!this.state.deny){
				this.setState({
					deny: false,
					apply: true,
				}, this.props.rem(this.props.tree.deny, false, this.props.id));
				
			} 
		}
	}
	render(){
		//console.log(this.props.id);
		return(
       		<div className='Item'>
	       		<div className='box' onClick={this.handleApply}>
	       			{
						this.state.apply 
							? <img  src={img} alt='YesUc'/>
							: <p>Так</p>
	       			}	       			
	       		</div>
				<div className='box' onClick={this.handleDeny}>
					{
						this.state.deny 
							? <img  src={img} alt='YesUc'/>
							: <p>Ні</p>
					}	       			
	       		</div>
	       		<p>{this.props.item.text}</p>
	       	</div>
		)
	}
}

export default Item;