import React, { useLayoutEffect, useState } from 'react'

let style = {
	borderRadius: '4px',
	fontFamily: 'Formular-Black',
	color: 'white',
	backgroundColor: '#10c8d2',
	padding: '20px 40px',
	fontSize: `15px`
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Block = (props) =>{
	const [width, height] = useWindowSize();
	if(width<600)
		return(
           	<div style={style}>
				Подати заявку!
			</div>
		)
	else{
		if(props.bo)
			return(
	           	<div style={style}>
					Подати заявку!
				</div>
			)
		else return(<div></div>)
	}
}

export default Block;