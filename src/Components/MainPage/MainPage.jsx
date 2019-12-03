import React from 'react';
import './MainPage.scss';
import MainSlider from './MainSlider/MainSlider.jsx';
import Boxes from './Boxes/Boxes.jsx';



const MainPage = () =>{
	return(
		<div className='MainPage'>
			<MainSlider/>
			<Boxes/>
		</div>
	)
}

export default MainPage;