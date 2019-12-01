import React, {Component} from 'react';
import './ThankYouPage.scss';


class ThankYouPage extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id: 0
	  };
	  this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		let regexp = /thankYou\/(\d+)/;
		let match = '';
		if(regexp.exec(document.location.href)){
			match = regexp.exec(document.location.href)[1];
		}
		else match = '0';
		this.setState({
			id: Number(match)
		})
		console.log(this.state.id);
		try {
    		const url = '';
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
		return(
			<div className='ThankYouPage'>
				<h1>Дякуємо!</h1>
				<p>Для завантаження позову та інструкції клацніть нижче</p>
				<button onClick={this.handleClick}>
					Завантажити!
				</button>
			</div>
		)
	}
}

export default ThankYouPage;