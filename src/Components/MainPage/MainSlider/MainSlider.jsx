import React from 'react';
import './MainSlider.scss';
import {NavLink} from 'react-router-dom';



const MainSlider = () =>{
	return(
		<div className='MainSlider' id='mainslider'>
			<div className='main'>
				<div>
				<h1>Ми перші в Україні!</h1>
				<p>Швидко та в режимі онлайн підготуємо для Вас позовну заяву в суд для оскарження перевищення швидкості руху.</p>
				<h3>ЮРИДИЧНА ТОЧНІСТЬ</h3>
				<span>Гарантія 100%, що складена нами позовна заява, буде юридично правильна. 
					Цей документ ви можете відразу подавати до суду. 
					Саме він буде ключовим в судовому процесі, щодо відстоювання правильності вашої позиції.
				</span>
				<div>
					<NavLink to = '/declaration'>
						<button>
							УНИКНУТИ ШТРАФУ
						</button>
					</NavLink>
					<p>
						Дізнатись більше
					</p>
				</div>
				</div>
			</div>
			<div className='steps'>
				<div className='circles'>
					<div>
						<p>1</p>
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
					<p>Оплачуєте наші послуги,які коштують як горнятко кави</p>
					<p>Отримуєте<br/> ГОТОВУ позовну заяву</p>
				</div>
			</div>
		</div>
	)
}

export default MainSlider;