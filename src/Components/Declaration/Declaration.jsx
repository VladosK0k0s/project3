import React from 'react';
import './Declaration.scss';
import Content from './Content/Content.jsx';


const Declaration = (props) =>{
	return(
		<div className='Declaration'>
			<Content prevObj={props.prevObj}/>
		</div>
	)
}

export default Declaration;