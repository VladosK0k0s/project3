import React from 'react'

let style = {
	borderRadius: '4px',
	fontFamily: 'Formular-Black',
	color: 'white',
	backgroundColor: '#10c8d2',
	padding: '20px 40px',
	fontSize: `15px`
}


class Block extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		if(this.props.bo)
			return(
               	<div style={style}>
					Подати заявку!
				</div>
			)
		else return(<div></div>)
	}
}


export default Block;