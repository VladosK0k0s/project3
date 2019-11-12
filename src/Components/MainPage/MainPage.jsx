import React from 'react';
import Header from './Header/Header.jsx';
import MainSlider from './MainSlider/MainSlider.jsx';
import ProductsMenu from './ProductsMenu/ProductsMenu.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';

const MainPage = () =>{
	return(
		<div className='MainPage'>
			<Header/>
			<hr/>
			<MainSlider/>
			<ProductsMenu/>
			<AboutUs/>
		</div>
	)
}

export default MainPage;