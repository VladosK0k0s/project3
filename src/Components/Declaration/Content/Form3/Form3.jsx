import React from 'react';
import './Form3.scss';
import InputMask from 'react-input-mask';
import { FaCalendarAlt } from "react-icons/fa";


class Form3 extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	labels:[
	  		'ПІБ',
	  		'ІПН',
	  		'Адреса позивача(клієнта)',
	  		'Пошта (на цю адресу буде відправлений документ)',
	  		'Номер телефону',
	  		'Адреса відповідача (установи, від якої виписаний протокол)',
	  		'ПІБ інспектора поліції',
	  		'Назва установи, від якої виписаний протокол',
	  		'Серія протоколу',
	  		'Номер постанови',
	  		'Марка авто',
	  		'Номерний знак авто',
	  		'Адреса вчинення правопорушення',
	  		'Швидкість з якою рухався автомобіль',
	  		'Швидкість встановлена на цій вулиці',
	  		'Дата правопорушення',
	  		'Час правопорушення'
	  	],
	  	placeholders: [
	  		'Прізвище Ім\'я По-батькові',
	  		'__________',
	  		'місто/область_вулиця_будинок_квартира',
	  		'example@ukr.net',
	  		'+380__-___-__-__',
	  		'місто/область_вулиця_будинок_квартира',
	  		'Прізвище Ім\'я По-батькові',
	  		'вказано в протоколі',
	  		'ААА00',
	  		'______',
	  		'',
	  		'АА-____-ІЕ',
	  		'місто/область_вулиця_будинок_квартира',
	  		'___ км/год',
	  		'___ км/год',
	  		'ДД.ММ.РРРР',
	  		'__год.:__хв.',
	  	],

	  	inputsData: this.props.data
	  };
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event,index){
		let newA = this.state.inputsData;
		newA[index] = event.target.value;
		if((index===11)||(index===8)) newA[index] = newA[index].toUpperCase();
		this.setState({
			inputsData: newA
		})
		this.props.handleThirdForm(this.state.inputsData, index)
	}
	render(){
		let pattern = '.*?';
		return(
			<div className='Form3'>
				<div className='b1'>
					<label>{this.state.labels[0]}
						{
							(()=>{pattern = `[A-Za-zА-Яа-яЁёІіЇїь]+\\s[A-Za-zА-Яа-яЁёІіЇїь]+\\s[A-Za-zА-Яа-яЁёІіЇїь]+`; return})()
						}
						<input 
							placeholder={this.state.placeholders[0]} 
							required={false}
							maxLength='100' 
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[0]} 
							onChange={(event)=>{this.handleInputChange(event,0)}}
						/>
					</label>
					<label className='IPN'>{this.state.labels[1]}
						{
							(()=>{pattern = `\\d{10}`; return})()
						}
						<InputMask mask="9999999999"
								maskChar = '_'	
								required					
								placeholder={this.state.placeholders[1]} 
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[1]} 
								onChange={(event)=>{this.handleInputChange(event,1)}}
							/>
					</label>
				</div>
				<label>{this.state.labels[2]}
					{
						(()=>{pattern = `.*?`; return})()
					}
					<input 
						placeholder={this.state.placeholders[2]} 
						required
						maxLength='30' 
						pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[2]} 
						onChange={(event)=>{this.handleInputChange(event,2)}}
					/>
				</label>
				<div className='b2'>
					<label className='post'>{this.state.labels[3]}
						{
							(()=>{pattern = `.+@.+\\..+`; return})()
						}
						<input 
							placeholder={this.state.placeholders[3]} 
							required
							maxLength='30' 
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[3]} 
							onChange={(event)=>{this.handleInputChange(event,3)}}
						/>
					</label>
					<label className='tel'>{this.state.labels[4]}
						{
							(()=>{pattern = `.*?`; return})()
						}
						<InputMask mask="+38099-999-99-99"
								maskChar = '_'	
								required					
								placeholder={this.state.placeholders[4]} 
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[4]} 
								onChange={(event)=>{this.handleInputChange(event,4)}}
							/>
					</label>
				</div>
				<label>{this.state.labels[5]}
					{
						(()=>{pattern = `.*?`; return})()
					}
					<input 
						placeholder={this.state.placeholders[5]} 
						required
						maxLength='30' 
						pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[5]} 
						onChange={(event)=>{this.handleInputChange(event,5)}}
					/>
				</label>
				<label>{this.state.labels[12]}
					{
						(()=>{pattern = `.*?`; return})()
					}
					<input 
						placeholder={this.state.placeholders[12]} 
						maxLength='30' 
						required
						pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[12]} 
						onChange={(event)=>{this.handleInputChange(event,12)}}
					/>
				</label>
				<label>{this.state.labels[7]}
					{
						(()=>{pattern = `.*?`; return})()
					}
					<input 
						placeholder={this.state.placeholders[7]} 
						required
						maxLength='30' 
						pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[7]} 
						onChange={(event)=>{this.handleInputChange(event,7)}}
					/>
				</label>
				<div className='b3'>	
					<label className='CarSpeed'>{this.state.labels[13]}
						{
							(()=>{pattern = `.*?`; return})()
						}
						<InputMask mask="999 км/год"
							maskChar = '_'
							placeholder={this.state.placeholders[13]} 
							required
							formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[13]} 
							onChange={(event)=>{this.handleInputChange(event,13)}}
						/>
					</label>
					<label className='CarSpeed'>{this.state.labels[14]}
						{
							(()=>{pattern = `.*?`; return})()
						}
						<InputMask mask="999 км/год"
							maskChar = '_'
							placeholder={this.state.placeholders[14]} 
							required
							formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[14]} 
							onChange={(event)=>{this.handleInputChange(event,14)}}
						/>
					</label>
				</div>
				<label className='PoliceName'>{this.state.labels[6]}
					{
						(()=>{pattern = `[A-Za-zА-Яа-яЁёІіЇїь]+\\s[A-Za-zА-Яа-яЁёІіЇїь]+\\s[A-Za-zА-Яа-яЁёІіЇїь]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[6]} 
						maxLength='100' 
						required
						pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[6]} 
						onChange={(event)=>{this.handleInputChange(event,6)}}
					/>
				</label>
				<div className='b4'>
					<div className='seriesANDnumber'>
						<label>{this.state.labels[8]}
							{
								(()=>{pattern = `[А-Яа-яІіЇї][А-Яа-яІіЇї][А-Яа-яІіЇї]\\d\\d`; return})()
							}
							<InputMask mask="ааа99"
								maskChar = '_'	 
								placeholder={this.state.placeholders[8]} 
								required
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[8]} 
								onChange={(event)=>{this.handleInputChange(event,8)}}
							/>
						</label>
						<label>{this.state.labels[9]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="999999"
								maskChar = '_'
								placeholder={this.state.placeholders[9]} 
								required
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[9]} 
								onChange={(event)=>{this.handleInputChange(event,9)}}
							/>
						</label>
					</div>
					<div>
						<label>{this.state.labels[10]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input 
								placeholder={this.state.placeholders[10]} 
								maxLength='30' 
								required
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[10]} 
								onChange={(event)=>{this.handleInputChange(event,10)}}
							/>
						</label>
						<label className='CarNumber'>{this.state.labels[11]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="аа-9999-аа"
								maskChar = '_'
								placeholder={this.state.placeholders[11]} 
								required
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[11]} 
								onChange={(event)=>{this.handleInputChange(event,11)}}
							/>
						</label>
					</div>
					<div>	
						<label className='Indate'>{this.state.labels[15]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input
								placeholder={this.state.placeholders[15]} 
								required
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="date" 
								value={this.state.inputsData[15]} 
								onChange={(event)=>{this.handleInputChange(event,15)}}
							/>
							<span><FaCalendarAlt color='#10c8d2'/></span>
						</label>
						<label className='Intime'>{this.state.labels[16]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input
								placeholder={this.state.placeholders[16]} 
								required
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яІіЇї]'}}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="time" 
								value={this.state.inputsData[16]} 
								onChange={(event)=>{this.handleInputChange(event,16)}}
							/>
						</label>
					</div>
				</div>
			</div>
		)
	}
}


export default Form3;
