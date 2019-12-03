import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () =>{
	return(
		<div className='Header'>
			<NavLink to = '/'>
				<img src={process.env.PUBLIC_URL + 'img/logo.png'} alt="logo"/>
			</NavLink>
		</div>
	)
}

export default Header;