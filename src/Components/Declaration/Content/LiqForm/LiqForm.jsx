import React from 'react';
import './LiqForm.scss';
import arrow from './oplata.png';
import ReactGa from 'react-ga';



class LiqForm extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	handleClickPay = () => {
		ReactGa.event({
			category: 'Button',
			action: 'Clicked on the payment button!'
		});
		console.log('Must send info about click to Google analystic!');
	};
	render(){
		if(this.props.secondval!==null&&this.props.firstval!==null){
			return(
				<form method="POST" className='LiqForm' action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
	               	<input type="hidden" name="data" value={this.props.firstval}/>
	               	<input type="hidden" name="signature" value={this.props.secondval} />						
	               	<button onClick={this.handleClickPay}><img src={arrow} alt="oplataimg"/>Оплатити 50 UAH</button>					
               	</form>
			)
		}
		else return(<div></div>)
	}
}

export default LiqForm;