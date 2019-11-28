import React from 'react';
import './Form2.css';



class Form2 extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	chosed: this.props.chosed,
	  	text:[
	  		'Складався протокол', 
	  		'Пред’являлись сертифікати про радар та відомості про щорічну перевірку данного приладу, а також його опломбування',
	  		'В постанові зазначено прізвище, ім’я, по-батькові та спеціальне звання патрульного поліцейського',
	  		'В постанові вказано технічний засіб, яким здійснено фото аба відео запис',
	  		'Внесені Ваші персональні дані до постанови',
	  		'Зазначена дата розгляду справи у постанові',
	  		'В постанові вказана стаття 122 КУпАП',
	  		'Постанова написана від руки',
	  		'Записи в постанові написані розбірливим почерком, друкованими літерами, синьою або чорною пастою'
	  	]
	  };
	  
	  this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id){
		let newA = this.state.chosed;
		newA[id] = !newA[id]
		this.setState({
			chosed: newA
		});
		this.props.handleSecondForm(this.state.chosed, id);
	}
	render(){
		return(
			<div className='Form2'>
				{
					this.state.text.map((el,i)=>{
						return (
							<div key={i} onClick={() =>{this.handleChange(i)}}>
								{
									this.state.chosed[i] ? 
			       					<img  src={process.env.PUBLIC_URL + '/img/YesChosed.png'} alt='YesC'/>: 
			       					<img  src={process.env.PUBLIC_URL + '/img/YesUnchosed.png' } alt='YesUc'/>
		       					}
								<p>{el}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Form2;