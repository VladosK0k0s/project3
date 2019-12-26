import React from 'react';
import './Content.scss';
import Form3 from './Form3/Form3.jsx';
import LiqForm from './LiqForm/LiqForm.jsx';
import { Redirect } from 'react-router-dom';

class Content extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	hover: true,
	  	form: null,
	  	chosed3: ['уу уу уу','1000000000','','','8888888888','','','','РРР','333333','','РР3333РР','','333','333','','', '', ''],
	  	form3Names:[
	  		'fullName',
	  		'IPN',
	  		'clientAdress',
	  		'email',
	  		'tel',
	  		'vidpovidachAdress',
	  		'policemanFullName',
	  		'instituteName',
	  		'protocolSeries',
	  		'postanovaNumber',
	  		'carBrand',
	  		'carNumber',
	  		'porusheniaAdress',
	  		'carSpeed',
	  		'defaultSpeed',
	  		'postanovaDate',
			'postanovaTime',
			'appartment',
			'sud'
	  	],
	  	mainObj:{
	  		fullName: 'уу уу уу',
	  		IPN: '1000000000',
	  		clientAdress: '',
	  		email: 'p.s.vlad2000@ukr.net',
	  		tel: '8888888888',
	  		vidpovidachAdress: '',
	  		policemanFullName: '',
	  		instituteName: '',
	  		protocolSeries: 'РРР',
	  		postanovaNumber: '333333',
	  		carBrand: '',
	  		carNumber: 'РР3333РР',
	  		porusheniaAdress: '',
	  		carSpeed: '333',
	  		defaultSpeed: '333',
	  		postanovaDate: '',
			postanovaTime: '',
			appartment:	'',
			sud: ''
			}
		}
	  this.handleThirdForm = this.handleThirdForm.bind(this);
	  this.Show = this.Show.bind(this);
	}
	handleThirdForm(chosed, id){
		this.setState({
		chosed3: chosed
		})
		let newObj = this.state.mainObj;
		newObj[this.state.form3Names[id]] = chosed[id];
		this.setState({
			mainObj: newObj
		})
	}
	Show(event){
		console.log(this.state.mainObj);
		event.preventDefault();
		const NewJSON = JSON.stringify(Object.assign(this.state.mainObj, JSON.parse(localStorage.getItem('sendObj'))));
		localStorage.removeItem('sendObj');
		console.log(NewJSON);
		try {		
			const url = 'https://api.xn--80a2c.com/user/create';
			const response = fetch(url, {
					method: 'POST', // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, cors, *same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
							'Content-Type': 'application/json',
							//'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: NewJSON,
			});
			response.then(
				res => {
					res.text()
					.then(text=>{
						setTimeout(this.setState({
							form: text
						}), 500);
					})
			},  rej =>{
				throw new Error("o_O");
			});
			
		} catch (error) {
			console.error('Ошибка:', error);
		}
	}
	render(){
		let r = /name="data" value="(.*?)"/;
		let r2 = /name="signature" value="(.*?)"/;
		var myArray1 = r.exec(this.state.form);
		var myArray2 = r2.exec(this.state.form);
		let firstval = myArray1 ? myArray1[1]: null;
		let secondval = myArray2 ? myArray2[1]: null;
		return(
			<div className='Content'>
				<h1>Cформувати позов</h1>
				<form >
				  <Form3 data={this.state.chosed3} handleThirdForm={this.handleThirdForm}/>
				</form>
				{((secondval!==null&&firstval!==null)&&(secondval!==undefined&&firstval!==undefined))
					? <LiqForm firstval={firstval} secondval={secondval}/>
					: <button onClick={this.Show} title="50 грн">Відправити</button>
				}
			</div>
		)
	}
}

export default Content;