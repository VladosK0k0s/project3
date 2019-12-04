import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.png';

const Header = () =>{
	return(
		<div className='Header'>
			<NavLink to = '/'>
				<img src={logo} alt="logo"/>
			</NavLink>
		</div>
	)
}

export default Header;