import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'
import { Link } from "react-scroll";

const Header = () =>{
	return(
		<div className='Header'>
			<Link
	                activeClass="active"
	                to="mainslider"
	                spy={true}
	                smooth={true}
	                offset={-70}
	                duration={500}
	              >
				<img src={process.env.PUBLIC_URL + 'img/logo.png'} alt="logo"/>
			</Link>
			<div className='header-links'>
				<div>
					<Link
		                activeClass="active"
		                to="aboutus"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              ><p>Про нас</p>
					</Link>
				</div>
				<div>
					<Link
		                activeClass="active"
		                to="recieve"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              ><p>Що ви отримуєте</p>
					</Link>
				</div>
				<div>
					<Link
		                activeClass="active"
		                to="algorithm"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              ><p>Алгоритм</p>
					</Link>
				</div>
				<div>
					<Link
		                activeClass="active"
		                to="instructions"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              ><p>Інструкції</p>
					</Link>
				</div>
				<div>
					<Link
		                activeClass="active"
		                to="services"
		                spy={true}
		                smooth={true}
		                offset={-70}
		                duration={500}
		              ><p>Сервіс</p>
					</Link>
				</div>
			</div>
			<NavLink to = '/declaration' className='header-btn'>
				<p>Уникнути штраф</p>
			</NavLink>
		</div>
	)
}

export default Header;