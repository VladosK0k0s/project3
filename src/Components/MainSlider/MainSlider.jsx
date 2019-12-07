import React from 'react';
import './MainSlider.scss';
import {NavLink} from 'react-router-dom';



const MainSlider = () =>{
	return(
		<div className='MainSlider' id='mainslider'>
			<div className='main'>
				<h1>Ми перші в Україні!</h1>
				<p>Всього у три кроки підготуємо для Вас позовну заяву в суд для оскарження перевищення швидкості руху.</p>
				<br/>
				<div className='steps_mobile'>
					<div className='circles'>
						<div>
							<div><p><NavLink to = '/thankYou'>1</NavLink></p></div>
							<h6>Вводите дані, <br/>вказані в протоколі порушення</h6>
						</div>
						<div>
							<div><p>2</p></div>
							<h6>Оплачуєте наші послуги, які коштують як горнятко кави</h6>
						</div>
						<div>
							<div><p>3</p></div>
							<h6>Отримуєте<br/> ГОТОВУ позовну заяву</h6>
						</div>
					</div>
				</div>
				<h3>ЮРИДИЧНА ТОЧНІСТЬ</h3>
				<br/>
				<span>Гарантія 100%, що складена нами позовна заява, буде юридично правильна. 
					Цей документ ви можете відразу подавати до суду. 
					Саме він буде ключовим в судовому процесі, щодо відстоювання правильності вашої позиції.
				</span>
				<div className='about'>
					<NavLink to = '/declaration'>
						<button>
							УНИКНУТИ ШТРАФУ
						</button>
					</NavLink>
					<NavLink to = '/about'>
						<p>
							Дізнатись більше
						</p>
					</NavLink>
				</div>
			</div>
			<div className='steps_desktop'>
				<div className='circles'>
					<div>
						<p><NavLink to = '/thankYou'>1</NavLink></p>
					</div>
					<span></span>
					<div>
						<p>2</p>
					</div>
					<span></span>
					<div>
						<p>3</p>
					</div>
				</div>
				<div>
					<p>Вводите дані, <br/>вказані в протоколі порушення</p>
					<p>Оплачуєте наші послуги, які коштують як горнятко кави</p>
					<p>Отримуєте<br/> ГОТОВУ позовну <br/> заяву</p>
				</div>
			</div>
		</div>
	)
}

export default MainSlider;