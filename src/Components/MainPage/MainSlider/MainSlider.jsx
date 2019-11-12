import React from 'react';
import { Link } from "react-scroll";

const MainSlider = () =>{
	return(
		<div className='MainSlider'>
			<div className='first' >
				<h1>Уникни штрафу прямо зараз!</h1>
				<p>Онлайн мережа для складання позову до суду для оскарження штрафу</p>
				<div>
					<div className='btn1'>
						Уникнути
					</div>
					<div className='btn2'>
						<Link
		                activeClass="active"
		                to="aboutus"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              >Дізнатись більше</Link>						
					</div>
				</div>
			</div>
			<div className='second' >
				<img src={process.env.PUBLIC_URL + 'img/2.png'} alt="logo"/>
			</div>
		</div>
	)
}

export default MainSlider;