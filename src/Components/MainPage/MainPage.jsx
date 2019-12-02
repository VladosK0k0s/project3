import React from 'react';
import './MainPage.scss';
import Header from './Header/Header.jsx';
import MainSlider from './MainSlider/MainSlider.jsx';
import Boxes from './Boxes/Boxes.jsx';
import Footer from './Footer/Footer';



const MainPage = () =>{
	return(
		<div className='MainPage'>
			<Header/>
			<MainSlider/>
			<Boxes/>
			<Footer/>
		</div>
	)
}

export default MainPage;