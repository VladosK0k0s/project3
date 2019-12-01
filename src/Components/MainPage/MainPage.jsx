import React from 'react';
import './MainPage.scss';
import Header from './Header/Header.jsx';
import MainSlider from './MainSlider/MainSlider.jsx';



const MainPage = () =>{
	return(
		<div className='MainPage'>
			<Header/>
			<MainSlider/>
		</div>
	)
}

export default MainPage;