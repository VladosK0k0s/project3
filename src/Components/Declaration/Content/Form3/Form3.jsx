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
	  		'Швидкість встановлена на цій вулиці',
	  		'Введіть, будь ласка, дату правопорушення у форматі день.місяць.рік (20.10.2019)',
	  		'Введіть, будь ласка, час правопорушення у форматі 15 год. 45 хв.'
	  	],
	  	inputsData: this.props.data
	  };
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event,index){
		let newA = this.state.inputsData;
		newA[index] = event.target.value;
		this.setState({
			inputsData: newA
		})
		this.props.handleThirdForm(this.state.inputsData, index)
	}
	render(){
		let dateid = this.state.inputsData.length - 2;
		let timeid = this.state.inputsData.length - 1;
		let pattern = '.*?';
		return(
			<div className='Form3'>
				{
					this.state.labels.map((el,i)=>{
						if(i===3) pattern = `.+@.+\..+`;
						else pattern ='.*?';
						return(
							<div key={i}>
								<label htmlFor={`input${i}`}>{el}</label>
								<input  maxLength='100' pattern = {pattern} title='Заповніть це поле' type="text" id={`input${i}`} value={this.state.inputsData[i]} onChange={(event)=>{this.handleInputChange(event,i)}}/>
							</div>
						)
					})
				}
				{/*<div>
					<label htmlFor='datepicker'>Дата правопорушення</label>
					<input title='Заповніть це поле' type="date" id='datepicker' value={this.state.inputsData[dateid]} onChange={(event)=>{this.handleInputChange(event,dateid)}}/>
				</div>
				<div>
					<label htmlFor='timepicker'>Час правопорушення</label>
					<input title='Заповніть це поле' type="time" id='timepicker' value={this.state.inputsData[timeid]} onChange={(event)=>{this.handleInputChange(event,timeid)}}/>
				</div>*/}
			</div>
		)
	}
}


export default Form3;
