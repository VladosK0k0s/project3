import React from 'react';
import './Form3.scss';
import InputMask from 'react-input-mask';
import { FaCalendarAlt } from "react-icons/fa";
import PopupExample from './PopUpExample/PopupExample.jsx';
import PlaceInput from './PlaceInput/PlaceInput.jsx';
import OblastSearch from './OblastSearch/OblastSearch.jsx';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";


class Form3 extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	labels:[
	  		'ПІБ особи, щодо якої розглядається справа',
	  		'ІПН',
	  		'Адреса проживання',
	  		'Електронна пошта',
	  		'Номер телефону',
	  		'Область, в якій було складено оскаржуваний протокол',
	  		'Посада, спеціальне звання та ПІБ особи, яка розглядає справу',
	  		'Назва установи, від якої виписаний протокол',
	  		'Серія постанови',
	  		'Номер постанови',
	  		'Марка і модель авто',
	  		'Номерний знак авто',
	  		'Місце скоєння правопорушення',
	  		'Швидкість, з якою рухався автомобіль',
	  		'Швидкість, встановлена на цій вулиці',
	  		'Дата правопорушення',
			'Час правопорушення',
			'Область, у якій ви живете'
	  	],
	  	placeholders: [
	  		'Прізвище Ім\'я По-батькові',
	  		'__________',
	  		'індекс, місто, вулиця, будинок, квартира',
	  		'example@ukr.net',
	  		'+380__-___-__-__',
	  		'',
	  		'Прізвище Ім\'я По-батькові',
	  		'вказано в протоколі',
	  		'',
	  		'_______',
	  		'Mitsubishi Lancer',
	  		'АА-____-ІЕ',
	  		'індекс, місто, вулиця, будинок, квартира',
	  		'___ км/год',
	  		'___ км/год',
	  		'ДД.ММ.РРРР',
			'__год.:__хв.',
			''
	  	],
		maxdate: null,
		  inputsData: this.props.data,
		  showalert: false,
		  validity: false,
		  curdate: null
	  };
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentDidMount = ()=>{
		this.setState({maxdate: this.todaySet()});
		this.setState({curdate: Date.now()})
	}
	checkDate = (date) =>{
		let today = this.todaySet(); 
		let todayarr = today.split('-');
		let datearr = date.split('-');
		if(+datearr[0]>+todayarr[0]) return today;
		else if((+datearr[0]>=+todayarr[0])&&(+datearr[1]>+todayarr[1])) return today;
		else if((+datearr[0]>=+todayarr[0])&&(+datearr[1]>=+todayarr[1])&&(+datearr[2]>+todayarr[2])) return today; 
		else return date;
	}
	handleInputChange(event,index){
		if(index === 5){
			let newA = this.state.inputsData;
			newA[index] = event.adress + ';' + event.nazva;
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, index);
		}
		else if(index === 15){
			let newA = this.state.inputsData;
			let date = event;
			if(!date)  newA[index] = '';
			else newA[index] = this.checkDate(date.getFullYear() + '-' + ("0" + (date.getMonth()+1)).slice(-2) + '-' +  ("0" + (date.getDate())).slice(-2));
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, index);
		}
		else if(index === 25){
			let newA = this.state.inputsData;
			console.log(event)
			newA[15] = event.target.value;
			console.log(newA[index]);
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, 15);
		}
		else if(index === 16){
			let newA = this.state.inputsData;
			console.log(event)
			newA[index] = event;
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, index);
		}
		else if (index === 17){
			let newA = this.state.inputsData;
			newA[index] = event;
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, index);
		}
		else if(index !== 2){
			let newA = this.state.inputsData;
			newA[index] = event.target.value;
			if((index===11)||(index===8)) newA[index] = newA[index].toUpperCase();
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			return this.props.handleThirdForm(this.state.inputsData, index);
		}
		else{
			let newA = this.state.inputsData;
			newA[index] = event.target.value;
			this.setState({
				inputsData: newA
			}, this.checkMinDate())
			this.props.handleThirdForm(this.state.inputsData, index);
		}
	}
	checkMinDate = () =>{
		let today = new Date();
		today.setDate(today.getDate() - 15);
		let currentarr = this.state.inputsData[15].split('-');
		let currentDate = new Date(currentarr[0], currentarr[1]-1, currentarr[2]);
		if(currentDate <= today) this.setState({showalert: true}, this.props.handleThirdForm(true, 100));
		else this.setState({showalert: false}, this.props.handleThirdForm(false, 100));
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
		return today = yyyy + '-' + mm + '-' + dd;
	}
	render(){
		let pattern = '.*?';
		return(
			<div className='Form3'>
				<label>{this.state.labels[0]}
					{
						(()=>{})()
					}
					<input 
						placeholder={this.state.placeholders[0]} 
						required={this.state.validity}
						pattern = {pattern} 
						maxLength='100' 
						title='Заповніть це поле' 
						type="text" 
						value={this.state.inputsData[0]} 
						onChange={(event)=>{this.handleInputChange(event,0)}}
					/>
				</label>
				<div className='Address'>
					<label className='fullAdd'>{this.state.labels[2]}
						{
							(()=>{pattern = `.+`; return})()
						}
						<input title='Заповніть це поле' 
							placeholder={this.state.placeholders[2]} 
							required={this.state.validity}
							type="text"
							pattern = {pattern} 
							value={this.state.inputsData[2]} 
							onChange={(event)=>{this.handleInputChange(event,2)}}
						/>
					</label>
					<label className='sud'>{this.state.labels[17]}
						<OblastSearch type="text"
							value={this.state.inputsData[17]} 
							onChange={(event)=>{this.handleInputChange(event,17)}}
						/>
					</label>
				</div>
				<div className='b4'>
					<div>
						<label className='IPN'>{this.state.labels[1]}
							{
								(()=>{pattern = `\\d{10}`; return})()
							}
							<InputMask mask="9999999999"
									maskChar = '_'	
									required={this.state.validity}
									pattern = {pattern} 				
									placeholder={this.state.placeholders[1]} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[1]} 
									onChange={(event)=>{this.handleInputChange(event,1)}}
								/>
						</label>
						<label className='post'>{this.state.labels[3]}
							{
								(()=>{pattern = `.+@.+\\..+`; return})()
							}
							<div>
								<input 
									placeholder={this.state.placeholders[3]} 
									required={this.state.validity}
									pattern = {pattern} 
									maxLength='50' 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[3]} 
									onChange={(event)=>{this.handleInputChange(event,3)}}
								/>
								<PopupExample content='На цю адресу буде відправлений документ'/>
							</div>
						</label>
						<label className='tel'>{this.state.labels[4]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="+38099-999-99-99"
									maskChar = '_'	
									required={this.state.validity}
									pattern = {pattern} 				
									placeholder={this.state.placeholders[4]} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[4]} 
									onChange={(event)=>{this.handleInputChange(event,4)}}
								/>
						</label>
						
					</div>
					<div>	
						<label className='Indate'>{this.state.labels[15]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<div hidden={!this.state.showalert} className="popover" role="tooltip">
									<h3 className="popover-header">Є 15 днів на оскарження постанови</h3>
									<div className="popover-body">Строк оскарження починається з дня вручення винесеної постанови. 
										Якщо строки пропущені, постанова оскарженню не підлягатиме.
									</div>
								</div>
							<div className="datepickerWrap">
								<DatePicker
									placeholder={this.state.placeholders[15]} 
									placeholderText={this.state.placeholders[15]} 
									required={this.state.validity}
									pattern = {pattern} 
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
							<TimePicker
								placeholder={this.state.placeholders[16]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="time" 
								value={this.state.inputsData[16]} 
								onChange={(event)=>{this.handleInputChange(event,16)}}
								showSecond={false}
								clearIcon={null}
								disableClock={true}
							/>
						</label>
						<label className='carModel' >{this.state.labels[10]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<div>
								<input 
									placeholder={this.state.placeholders[10]} 
									maxLength='100' 
									required={this.state.validity}
									// pattern = {pattern} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[10]} 
									onChange={(event)=>{this.handleInputChange(event,10)}}
								/>
								<PopupExample content='Переписати зі свідоцтва про реєстрацію транспортного засобу'/>
							</div>
						</label>
					</div>
					<div>
						<label className='pSeries' >{this.state.labels[8]}
							{
								(()=>{pattern = `[А-Яа-яЄєІіЇї0-9]+`; return})()
							}
							<input
								placeholder={this.state.placeholders[8]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[8]} 
								onChange={(event)=>{this.handleInputChange(event,8)}}
							/>
						</label>
						<label className='pNumber' >{this.state.labels[9]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="9999999"
								maskChar = '_'
								placeholder={this.state.placeholders[9]} 
								required={this.state.validity}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[9]} 
								onChange={(event)=>{this.handleInputChange(event,9)}}
							/>
						</label>
						<label className='CarNumber'>{this.state.labels[11]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							
							<input
								maskChar = '_'
								placeholder={this.state.placeholders[11]} 
								required={this.state.validity}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[11]} 
								onChange={(event)=>{this.handleInputChange(event,11)}}
							/>
						</label>
					</div>
				</div>
				<div className='b4_mobile'>
					<div className='tel_IPN_mob'>
						<label className='IPN'>{this.state.labels[1]}
							{
								(()=>{pattern = `\\d{10}`; return})()
							}
							<InputMask mask="9999999999"
									maskChar = '_'	
									required={this.state.validity}
									pattern = {pattern} 				
									placeholder={this.state.placeholders[1]} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[1]} 
									onChange={(event)=>{this.handleInputChange(event,1)}}
								/>
						</label>
						<label className='tel'>{this.state.labels[4]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="+38099-999-99-99"
									maskChar = '_'	
									required={this.state.validity}
									pattern = {pattern} 				
									placeholder={this.state.placeholders[4]} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[4]} 
									onChange={(event)=>{this.handleInputChange(event,4)}}
								/>
						</label>
					</div>
					<label className='post_mobile'>{this.state.labels[3]}
						{
							(()=>{pattern = `.+@.+\\..+`; return})()
						}
						<div>
							<input 
								placeholder={this.state.placeholders[3]} 
								required={this.state.validity}
								pattern = {pattern} 
								maxLength='50' 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[3]} 
								onChange={(event)=>{this.handleInputChange(event,3)}}
							/>
							<PopupExample content='На цю адресу буде відправлений документ'/>
						</div>
					</label>
					<div className='DateTime_mobile'>
						<label className='Intime'>{this.state.labels[16]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<TimePicker
								placeholder={this.state.placeholders[16]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								showSecond={false}
								title='Заповніть це поле' 
								value={this.state.inputsData[16]} 
								onChange={(event)=>{this.handleInputChange(event,16)}}
								clearIcon={null}
								disableClock={true}
							/>
						</label>
						<label className='Indate'>{this.state.labels[15]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<div hidden={!this.state.showalert} className="popover" role="tooltip">
								<div className="arrow"></div>
								<h3 className="popover-header">Є 15 днів на оскарження Постанови</h3>
								<div className="popover-body">Строк оскарження починається з дня вручення винесеної Постанови. 
									Якщо строки пропущені, Постанова оскарженню не підлягатиме.
								</div>
							</div>
							<div className="datepickerWrap">
								<input
									placeholder={this.state.placeholders[15]} 
									required={this.state.validity}
									pattern = {pattern} 
									formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
									title='Заповніть це поле' 
									type="date" 
									max={this.state.maxdate}
									value={this.state.inputsData[15]} 
									selected={this.state.curdate}
									onChange={(event)=>{this.handleInputChange(event,25)}}
								/>
								<span><FaCalendarAlt color='#10c8d2'/></span>
							</div>
						</label>
					</div>
					<div className='CarStats_mobile'>
						<label className='carModel_mobile' >{this.state.labels[10]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<div>
								<input 
									placeholder={this.state.placeholders[10]} 
									maxLength='35' 
									required={this.state.validity}
									pattern = {pattern} 
									title='Заповніть це поле' 
									type="text" 
									value={this.state.inputsData[10]} 
									onChange={(event)=>{this.handleInputChange(event,10)}}
								/>
								<PopupExample content='Переписати зі свідоцтва про реєстрацію транспортного засобу'/>
							</div>
						</label>
						<label className='CarNumber'>{this.state.labels[11]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<input
								maskChar = '_'
								placeholder={this.state.placeholders[11]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[11]} 
								onChange={(event)=>{this.handleInputChange(event,11)}}
							/>
						</label>
					</div>
					<div className='Postanova_mobile'>
						<label className='pSeries' >{this.state.labels[8]}
							{
								(()=>{pattern = `[А-Яа-яЄєІіЇї0-9]+`; return})()
							}
							<input
								placeholder={this.state.placeholders[8]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[8]} 
								onChange={(event)=>{this.handleInputChange(event,8)}}
							/>
						</label>
						<label className='pNumber' >{this.state.labels[9]}
							{
								(()=>{pattern = `.*?`; return})()
							}
							<InputMask mask="9999999"
								maskChar = '_'
								placeholder={this.state.placeholders[9]} 
								required={this.state.validity}
								pattern = {pattern} 
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[9]} 
								onChange={(event)=>{this.handleInputChange(event,9)}}
							/>
						</label>
					</div>
				</div>			
				
				<div className='b3'>
					<label className='PlaceVidpovidach'>{this.state.labels[5]}
						{
							(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`; return})()
						}
						<PlaceInput
							onChange={(event)=>{this.handleInputChange(event,5)}}
						/>
					</label>	
					<label className='CarSpeed'>{this.state.labels[13]}
						{
							(()=>{pattern = `.*?`; return})()
						}
						<div>
							<InputMask mask="999 км/год"
								maskChar = '_'
								placeholder={this.state.placeholders[13]} 
								required={this.state.validity}
								pattern = {pattern} 
								formatChars= {{'9': '[0-9]','а': '[А-Яа-яЄєЁёІіЇїь]'}}
								title='Заповніть це поле' 
								type="text" 
								value={this.state.inputsData[13]} 
								onChange={(event)=>{this.handleInputChange(event,13)}}
							/>
							<PopupExample content='Переписати з Постанови'/>
						</div>
					</label>
					<label className='CarSpeed'>{this.state.labels[14]}
						{
							(()=>{pattern = `.*?`; return})()
						}
						<InputMask mask="999 км/год"
							maskChar = '_'
							placeholder={this.state.placeholders[14]} 
							required={this.state.validity}
							pattern = {pattern} 
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
						(()=>{pattern = `.*?`; return})()
					}
					<div>
						<input 
							placeholder={this.state.placeholders[6]} 
							maxLength='200' 
							required={this.state.validity}
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[6]} 
							onChange={(event)=>{this.handleInputChange(event,6)}}
						/>
						<PopupExample content='Переписати з Постанови'/>
					</div>
				</label>
				<label className='PlacePravoporush'>{this.state.labels[12]}
					{
						(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`; return})()
					}
					<div>
						<input 
							placeholder={this.state.placeholders[12]} 
							maxLength='200' 
							required={this.state.validity}
							pattern = {pattern} 
							title='Заповніть це поле' 
							type="text" 
							value={this.state.inputsData[12]} 
							onChange={(event)=>{this.handleInputChange(event,12)}}
						/>
						<PopupExample content='Переписати з Постанови'/>
					</div>
				</label>
				{/* <label>{this.state.labels[7]}
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
				</label> */}
			</div>
		)
	}
}


export default Form3;
