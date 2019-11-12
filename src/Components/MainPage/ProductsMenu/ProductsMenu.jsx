import React from 'react';
import { Link } from "react-scroll";
import {IoIosArrowRoundForward} from 'react-icons/io';

const ProductsMenu = () =>{
	return(
		<div className='ProductsMenu'>
			<div className='menu-btn1'>
				<Link
	                activeClass="active"
	                to="section1"
	                spy={true}
	                smooth={true}
	                offset={-70}
	                duration={500}
	              >
	              <div>
	              	<h5>Далі</h5>
	              	<p>Оскаржити штраф
	              		<span><IoIosArrowRoundForward size= '2em' /></span>
	              	</p>
	              </div>
	            </Link>
	        </div>
	        <div className='menu-btn2'>
		        <Link
		            activeClass="active"
		            to="section1"
		            spy={true}
		            smooth={true}
		            offset={-70}
		            duration={500}
		          >
		          <div>
		          	<h5>Далі</h5>
		          	<p>Послуги юриста 
		          		<span><IoIosArrowRoundForward size= '2em' /></span>
		          	</p>
		          </div>
		        </Link>
		    </div>
		</div>
	)
}

export default ProductsMenu;