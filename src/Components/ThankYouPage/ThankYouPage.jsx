import React, {Component} from 'react';
import './ThankYouPage.scss';
import {FaFileDownload} from "react-icons/fa";

class ThankYouPage extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			id: '',
			url: ''
	  };
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		let regexp = /thankYou\/(\w+)/;
		let match = '';
		if(regexp.exec(document.location.href)){
			match = regexp.exec(document.location.href)[1];
		}
		else match = '0';
		this.setState({
			id: match,
			url: `https://api.аш.com/user/download/${match}`,
			urlalg: `https://api.аш.com/pdf/download/`
		}, this.handleClick)
		
		console.log(this.state);
	}
	handleClick = () =>{
		try {
				const url = `https://api.аш.com/user/sendmail/${this.state.id}`;
				console.log(url);
    		//const url = 'http://34.77.232.179:4000/user/create';
	    	const response = fetch(url, {
		        method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
				if(response.status != 404){
					response.then((res) => {
						console.log('HI!');
					});
				}
				else{
					console.log(404);
				}
	    } catch (error) {
			console.error('Ошибка:', error);
		}
	}
	render(){
		return(
			<div className='ThankYouPage'>
				<h1>Дякуємо!</h1>

				<form method="get" action={this.state.url}>
					<button type='submit'>
						<FaFileDownload />
						Завантажити!
					</button>
				</form>
				<form method="get" action={this.state.urlalg}>
					<button className='algbut' type='submit'>
						Завантажити алгоритм
					</button>
				</form>
			</div>
		)
	}
}

export default ThankYouPage;