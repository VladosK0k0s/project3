import React from 'react';
import './ProductsMenu.css';
import {NavLink} from 'react-router-dom'
import {IoIosArrowRoundForward} from 'react-icons/io';
import {Modal, Button} from 'react-bootstrap'

const ProductsMenu = () =>{
	const [show, setShow] = React.useState(false);
	const [name, setName] = React.useState('');
	const [tel, setTel] = React.useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleNameChange = (event) => setName(event.target.value);
    const handleTelChange = (event) => setTel(event.target.value);
	return(
		<div className='ProductsMenu'>
			<NavLink className='menu-btn1' to = '/declaration'>	
              	<h5>Далі</h5>
              	<p>Оскаржити штраф
              		<span><IoIosArrowRoundForward className='svg' size= '2em' /></span>
              	</p>
	        </NavLink>
	    	<div variant="primary" className='menu-btn2' onClick={handleShow}>
	    		<h5>Далі</h5>
		  		<p>Послуги юриста 
		  		<span><IoIosArrowRoundForward className='svg' size= '2em' /></span>
		  		</p>
	    	</div>
	      	<Modal size="sm" show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter"
      centered>
		        <Modal.Header closeButton>
		          <Modal.Title>Залиште свій номер</Modal.Title>
		        </Modal.Header>
		        <Modal.Body className='modaaaal'>
	        		<input type="text" placeholder='Ім`я' value={name} onChange={handleNameChange}/>
	        		<input type="text" placeholder='Телефон' value={tel} onChange={handleTelChange}/>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="primary" onClick={handleClose}>
		            Відправити
		          </Button>
		        </Modal.Footer>
	      	</Modal>
		</div>
	)
}

export default ProductsMenu;