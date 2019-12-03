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
	  	chosed3: ['','','','','','','','','','','','','','','','',''],
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
	  		'postanovaTime'
	  	],
	  	form3Obj: {
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
	  		postanovaTime: ''	  		
	  	},
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
	  		postanovaTime: ''	
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
    async Show(event){
    	try {
    		const url = 'https://api.xn--80a2c.com/user/create';
    		//const url = 'http://34.77.232.179:4000/user/create';
	    	const response = fetch(url, {
		        method: 'POST', // *GET, POST, PUT, DELETE, etc.
		        mode: 'cors', // no-cors, cors, *same-origin
		        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		        credentials: 'same-origin', // include, *same-origin, omit
		        headers: {
		            'Content-Type': 'application/json',
		            //'Content-Type': 'application/x-www-form-urlencoded',
		        },
		        redirect: 'follow', // manual, *follow, error
		        referrer: 'no-referrer', // no-referrer, *client
		        body: JSON.stringify(this.state.mainObj),
		        //body: {main: this.state.mainObj}, // тип данных в body должен соответвовать значению заголовка "Content-Type"
		    });
		    response.then(
		    	res => {
		    	 res.text().then(text=>{
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
    	event.preventDefault();
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
				<h1>Оформити позов</h1>
				<form onSubmit = {(event)=>this.Show(event)}>
					<Form3 data={this.state.chosed3} handleThirdForm={this.handleThirdForm}/>
					<button>Відправити</button>	
				</form>
      	<div>
					<LiqForm firstval={firstval} secondval={secondval}/>
        </div>
			</div>
		)
	}
}

export default Content;