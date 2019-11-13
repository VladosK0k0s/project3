import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () =>{
	return(
		<div className='sticky'>
			<NavLink className='DeclarationHeader' to = '/'>
				<img src={process.env.PUBLIC_URL + 'img/logo.png'} alt="logo"/>
			</NavLink>
		</div>
	)
}

export default Header;