import React from 'react';
import {NavLink} from 'react-router-dom'
import Block from './Block/Block.jsx';


class Services extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			hover1: false,
			hover2: false
		};
		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
		this.createBlock = this.createBlock.bind(this);
	}
	onMouseEnterHandler(number){
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
		let style1 = this.state.hover1 ? 'onOver' : '';
		let style2 = this.state.hover2 ? 'onOver' : '';
		return(
			<NavLink style={{textDecoration: 'none'}} to = '/declaration'>
				<div id='services' className='Services'>
					<div 
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
						<Block bo={this.state.hover1}/>
					</div>
					<div className={style2} 
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
						<Block bo={this.state.hover2}/>
					</div>
				</div>
			</NavLink>
		)
	}
}

export default Services;