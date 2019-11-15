import React from 'react';
import './Form3.css';


class Form3 extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	labels:[
	  		'ПІБ',
	  		'ІПН',
	  		'Адреса позивача(клієнта)',
	  		'Пошта',
	  		'Номер телефону',
	  		'Адреса відповідача (установи, від якої виписаний протокол)',
	  		'ПІБ інспектора поліції',
	  		'Назва установи, від якої виписаний протокол',
	  		'Серія та номер постанови',
	  		'Марка авто',
	  		'Номерний знак авто',
	  		'Адреса вчинення правопорушення',
	  		'Швидкість з якою рухався автомобіль',
	  	],
	  	inputsData:['','','','','','','','','','','','','']
	  };
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event,index){
		let newA = this.state.inputsData;
		newA[index] = event.target.value;
		this.setState({
			inputsData: newA
		})
		this.props.handleThirdForm(this.state.inputsData)
	}
	render(){
		return(
			<div className='Form3'>
				{
					this.state.labels.map((el,i)=>{
						return(
							<div key={i}>
								<label htmlFor={`input${i+1}`}>{el}</label>
								<input title='Заповніть це поле' type="text" id={`input${i+1}`} value={this.state.inputsData[i]} onChange={(event)=>{this.handleInputChange(event,i)}}/>
							</div>
						)
					})
				}
			</div>
		)
	}
}


export default Form3;
