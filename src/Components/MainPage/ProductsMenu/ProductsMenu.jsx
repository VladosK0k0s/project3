import React from 'react';
import './ProductsMenu.css';
import {NavLink} from 'react-router-dom'
import {IoIosArrowRoundForward} from 'react-icons/io';

const ProductsMenu = () =>{
	return(
		<div className='ProductsMenu'>
			<NavLink className='menu-btn1' to = '/declaration'>	
              	<h5>Далі</h5>
              	<p>Оскаржити штраф
              		<span><IoIosArrowRoundForward className='svg' size= '2em' /></span>
              	</p>
	        </NavLink>
	        <div className='menu-btn2'>
	          	<h5>Далі</h5>
	          	<p>Послуги юриста 
	          		<span><IoIosArrowRoundForward className='svg' size= '2em' /></span>
	          	</p>
		    </div>
		</div>
	)
}

export default ProductsMenu;