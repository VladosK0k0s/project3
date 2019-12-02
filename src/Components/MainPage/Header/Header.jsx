import React from 'react';
import './Header.scss';
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
		</div>
	)
}

export default Header;