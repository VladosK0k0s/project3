import React from 'react';
import './Content.scss';
import Form3 from './Form3/Form3.jsx';
import LiqForm from './LiqForm/LiqForm.jsx';

class Content extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	hover: true,
	  	form: null,
	  	chosed3: ['','','','','','','','','','','','','','','','','', ''],
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
			'sud'
	  	],
	  	mainObj:{
	  		fullName: '',
	  		IPN: '',
	  		clientAdress: '',
	  		email: '',
	  		tel: '',
	  		vidpovidachAdress: '',
	  		policemanFullName: '',
	  		instituteName: '',
	  		protocolSeries: '',
	  		postanovaNumber: '',
	  		carBrand: '',
	  		carNumber: '',
	  		porusheniaAdress: '',
	  		carSpeed: '',
	  		defaultSpeed: '',
	  		postanovaDate: '',
			postanovaTime: '',
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
				<form onSubmit={this.Show}>
				  <Form3 data={this.state.chosed3} handleThirdForm={this.handleThirdForm}/>
				  {((secondval!==null&&firstval!==null)&&(secondval!==undefined&&firstval!==undefined))
					? <LiqForm firstval={firstval} secondval={secondval}/>
					: <button type='submit' title="50 грн">Відправити</button>
					}
				</form>
				
			</div>
		)
	}
}

export default Content;