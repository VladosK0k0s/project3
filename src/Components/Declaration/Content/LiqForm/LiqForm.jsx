import React from 'react';
import './LiqForm.css';



class LiqForm extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		if(this.props.secondval!==null&&this.props.firstval!==null){
			return(
				<form method="POST" className='LiqForm' action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
	               	<input type="hidden" name="data" value={this.props.firstval}/>
	               	<input type="hidden" name="signature" value={this.props.secondval} />
	               	<input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png" name="btn_text" />
               	</form>
			)
		}
		else return(<div></div>)
	}
}

export default LiqForm;