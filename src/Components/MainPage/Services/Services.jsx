import React from 'react';
import './Services.css';
import {NavLink} from 'react-router-dom'
import Block from './Block/Block.jsx';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';


class Services extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			hover: true,
			hover1: false,
			hover2: false
		};
		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
		this.createBlock = this.createBlock.bind(this);
	}
	onMouseEnterHandler(number){
		const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		console.log(width);
		this.setState({
            [`hover${number}`]: true
        });
	}
	onMouseLeaveHandler(number){
		this.setState({
            [`hover${number}`]: false
        });
	}
	createBlock(){
		return(
			<div classNamee={`hiddenFragment`}>
				jjjjj
			</div>
		)
	}
	render(){
		return(
				<div id='services' className='Services'>
					<NavLink className='service' to = '/declaration' 
						onMouseEnter={() =>this.onMouseEnterHandler(1)}
	                    onMouseLeave={() =>this.onMouseLeaveHandler(1)}>
						<h3>Юридична точнiсть</h3>
						<p>
			                Гарантія 100%, що складена нами позовна заява, буде юридично правильна. 
			                Цей документ ви можете відразу подавати до суду. 
							Саме він буде ключовим в судовому
							процесі, щодо відстоювання правильності вашої позиції                                     
						</p>
						<div className='bottomFragment'>
							<span>100%</span>
							<p>Гарантія</p>
						</div>
						<TransitionGroup >
							<CSSTransition 
	                    			key={1}
	                    			in={this.state.hover}
									appear={true}
									timeout={600}
									classNames='fade'
								>
								<Block bo={this.state.hover1}/>
							</CSSTransition>	
						</TransitionGroup>
					</NavLink>
					<NavLink className='service' to = '/declaration' 
						onMouseEnter={() =>this.onMouseEnterHandler(2)}
	                    onMouseLeave={() =>this.onMouseLeaveHandler(2)}>
						<h3>Гарантія</h3>
						<p>
							Автокредит на приобретение подержанного автомобиля 
							любого года выпуска в салоне — партнере банка                                 
						</p>
						<div className='bottomFragment'>
							<span>24/7</span>
							<p>Працюємо</p>
						</div>
						<TransitionGroup >
							<CSSTransition 
	                    			key={1}
	                    			in={this.state.hover}
									appear={true}
									timeout={600}
									classNames='fade'
								>
								<Block bo={this.state.hover2}/>
							</CSSTransition>	
						</TransitionGroup>
					</NavLink>
				</div>
			
		)
	}
}

export default Services;