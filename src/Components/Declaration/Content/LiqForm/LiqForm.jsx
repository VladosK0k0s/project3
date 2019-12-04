import React from 'react';
import './LiqForm.scss';
import arrow from './oplata.png';



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
	               	<button><img src={arrow} alt="oplataimg"/>ОПЛАТИТИ</button>
               	</form>
			)
		}
		else return(<div></div>)
	}
}

export default LiqForm;