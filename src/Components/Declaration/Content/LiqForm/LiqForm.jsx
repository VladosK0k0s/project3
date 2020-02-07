import React from 'react';
import './LiqForm.scss';




class LiqForm extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		if(this.props.secondval!==null&&this.props.firstval!==null){
			return(
				<form className="LiqForm" method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
					<input type="hidden" name="data" 
					value={this.props.firstval} />
					<input type="hidden" name="signature" value={this.props.secondval}/>
					<button style={{border: "none !important", display: "inline-block !important", textAlign: "center !important",padding: "7px 20px !important",
						color: "#fff !important", fontSize: "16px !important", fontWeight: "600 !important", fontFamily: "OpenSans, sans-serif; cursor: pointer !important; border-radius: 2px !important",
						background: "rgb(122,183,43) !important", onmouseover: "this.style.opacity='0.5'", onmouseout:"this.style.opacity='1'"}}>
						<img alt="arrow" src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"
							style={{marginRight: "7px !important", verticalAlign: "middle !important"}}/>
						<span style={{verticalAlign: "middle; !important"}}>Оплатити 50 UAH</span>
					</button>
					
				</form>
			)
		}
		else return(<div></div>)
	}
}

export default LiqForm;