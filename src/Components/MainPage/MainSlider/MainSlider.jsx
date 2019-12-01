import React from 'react';
import './MainSlider.scss';
import {NavLink} from 'react-router-dom';



const MainSlider = () =>{
	return(
		<div className='MainSlider' id='mainslider'>
		<div>
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
			<img src={process.env.PUBLIC_URL + 'img/image1.png'} alt="slider"/>
		</div>
	)
}

export default MainSlider;