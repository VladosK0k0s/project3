import React from 'react';
import Header from './Header/Header.jsx';
import MainSlider from './MainSlider/MainSlider.jsx';
import ProductsMenu from './ProductsMenu/ProductsMenu.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import RecieveSection from './RecieveSection/RecieveSection.jsx';
import Algorithm from './Algorithm/Algorithm.jsx';
import Instructions from './Instructions/Instructions.jsx';
import Services from './Services/Services.jsx';


const MainPage = () =>{
	return(
		<div className='MainPage'>
			<Header/>
			<MainSlider/>
			<ProductsMenu/>
			<AboutUs/>
			<RecieveSection/>
			<Algorithm/>
			<Instructions/>
			<Services/>
		</div>
	)
}

export default MainPage;