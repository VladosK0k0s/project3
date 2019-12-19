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
	  		'Марка і модель авто',
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
	  		'ААА',
	  		'______',
	  		'',
	  		'АА-____-ІЕ',
	  		'місто/область_вулиця_будинок_квартира',
	  		'___ км/год',
	  		'___ км/год',
	  		'ДД.ММ.РРРР',
	  		'__год.:__хв.',
	  	],
		maxdate: null,
	  	inputsData: this.props.data
	  };
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentDidMount = ()=>{
		this.setState({maxdate: this.todaySet()});
	}
	checkDate = (date) =>{
		let today = this.todaySet(); 
		let todayarr = today.split('-');
		let datearr = date.split('-');
		if(datearr[0]>todayarr[0]) return today;
		if(datearr[1]>todayarr[1]) return today;
		if(datearr[2]>todayarr[2]) return today;
		else return date;
	}
	handleInputChange(event,index){
		let newA = this.state.inputsData;
		newA[index] = event.target.value;
		if((index===11)||(index===8)) newA[index] = newA[index].toUpperCase();
		if(index===15) newA[index] = this.checkDate(newA[index]);
		this.setState({
			inputsData: newA
		})
		this.props.handleThirdForm(this.state.inputsData, index)
	}
	todaySet = () =>{
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth()+1; //January is 0!
		let yyyy = today.getFullYear();
		if(dd<10){
				dd='0'+dd
			} 
			if(mm<10){
				mm='0'+mm
			}
		return today = yyyy+'-'+mm+'-'+dd;
	}
	render(){
		let pattern = '.*?';
		return(
			<div className='Form3'>
				<div className='b1'>
					<label>{this.state.labels[0]}
						{
							(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь.'‘-]+\\s[А-Яа-яЁёЄєІіЇїь.'‘-]+\\s[А-Яа-яЄєЁёІіЇїь.‘'-]+`; return})()
						}
						<input 
							placeholder={this.state.placeholders[0]} 
							required
							pattern = {pattern} 
							maxLength='50' 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[0]} 
							onChange={(event)=>{this.handleInputChange(event,0)}}
						/>
					</label>
					<div className='IPN_tel'>
						<label className='IPN'>{this.state.labels[1]}
							{
								(()=>{pattern = `\\d{10}`; return})()
							}
							<InputMask mask="9999999999"
									maskChar = '_'	
									//required	
									//pattern = {pattern} 				
									placeholder={this.state.placeholders[1]} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[1]} 
									onChange={(event)=>{this.handleInputChange(event,1)}}
								/>
						</label>
						<label className='tel_mobile'>{this.state.labels[4]}
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
				</div>
				<label>{this.state.labels[2]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[2]} 
						// required
						// pattern = {pattern} 
						maxLength='30' 
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
							// required
							// pattern = {pattern} 
							maxLength='30' 
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
								// required	
								// pattern = {pattern} 				
								placeholder={this.state.placeholders[4]} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[4]} 
								onChange={(event)=>{this.handleInputChange(event,4)}}
							/>
					</label>
				</div>
				<label>{this.state.labels[5]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[5]} 
						// required
						// pattern = {pattern} 
						maxLength='30' 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[5]} 
						onChange={(event)=>{this.handleInputChange(event,5)}}
					/>
				</label>
				<label>{this.state.labels[12]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[12]} 
						maxLength='30' 
						// required
						// pattern = {pattern} 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[12]} 
						onChange={(event)=>{this.handleInputChange(event,12)}}
					/>
				</label>
				<label>{this.state.labels[7]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;:]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[7]} 
						// required
						// pattern = {pattern}
						maxLength='30' 
						 
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
							// required
							// pattern = {pattern} 
							formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
							
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
							// required
							// pattern = {pattern} 
							formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
							
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[14]} 
							onChange={(event)=>{this.handleInputChange(event,14)}}
						/>
					</label>
				</div>
				<label className='PoliceName'>{this.state.labels[6]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь.'‘-]+\\s[А-Яа-яЁёЄєІіЇїь.'‘-]+\\s[А-Яа-яЄєЁёІіЇїь.‘'-]+`; return})()
					}
					<input 
						placeholder={this.state.placeholders[6]} 
						maxLength='50' 
						// required
						// pattern = {pattern} 
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
								(()=>{pattern = `[А-Яа-яІіЇїь][А-Яа-яІіЇїь][А-Яа-яІіЇїь]`; return})()
							}
							<InputMask mask="ааа"
								maskChar = '_'	 
								placeholder={this.state.placeholders[8]} 
								// required
								// pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
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
								// required
								// pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[9]} 
								onChange={(event)=>{this.handleInputChange(event,9)}}
							/>
						</label>
					</div>
					<div className='carStats'>
						<label>{this.state.labels[10]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input 
								placeholder={this.state.placeholders[10]} 
								maxLength='35' 
								// required
								// pattern = {pattern} 
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
								// required
								// pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
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
							<div>
								<input
									placeholder={this.state.placeholders[15]} 
									// required
									// pattern = {pattern} 
									formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
									title='Заповніть це поле' 
									type="date" 
									max={this.state.maxdate}
									value={this.state.inputsData[15]} 
									onChange={(event)=>{this.handleInputChange(event,15)}}
								/>
								<span><FaCalendarAlt color='#10c8d2'/></span>
							</div>
						</label>
						<label className='Intime'>{this.state.labels[16]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input
								placeholder={this.state.placeholders[16]} 
								// required
								// pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								
								title='Заповніть це поле' 
								type="time" 
								value={this.state.inputsData[16]} 
								onChange={(event)=>{this.handleInputChange(event,16)}}
							/>
						</label>
					</div>
				</div>
				<div className='carStats_mobile'>
						<label>{this.state.labels[10]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input 
								placeholder={this.state.placeholders[10]} 
								maxLength='30' 
								// required
								// pattern = {pattern} 
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
								// required
								//pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[11]} 
								onChange={(event)=>{this.handleInputChange(event,11)}}
							/>
						</label>
					</div>
			</div>
		)
	}
}


export default Form3;
