import React from 'react';
import './Declaration.scss';
import Content from './Content/Content.jsx';
import { Redirect } from "react-router-dom";


const Declaration = (props) =>{
	const pass = JSON.parse(localStorage.getItem('passed')).pass;
	return(
		<div className='Declaration'>
			{
				pass
				? <Content prevObj={props.prevObj}/>
				: <Redirect to='/' />
			}
		</div>
	)
}

export default Declaration;