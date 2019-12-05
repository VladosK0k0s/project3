import React from 'react';
import './Footer.scss';
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGlobe } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import img from '../../img/logo.png';

const Footer = () =>{
    const [show, setShow] = React.useState(false);
	const [name, setName] = React.useState('');
	const [tel, setTel] = React.useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleNameChange = (event) => setName(event.target.value);
    const handleTelChange = (event) => setTel(event.target.value);
    return(
        <div className='Footer'>
            <div className='Section1'>
                <div className='Section1_1'>
                    <div>
                        <img src={img} alt="logo"/>
                    </div>
                    <div className='Contacts'>
                        <p><FaGlobe className='svg' size= '2em'/>www.example.com</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleShow}>ЗВ’ЯЗАТИСЯ З НАМИ</button>
                </div>
            </div>
            <div>
                © OOO “   ”
            </div>
            <Modal dialogClassName={'Modal'} show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter"
      centered>
		        <Modal.Header closeButton>
		          <Modal.Title className='ModalTitle'>Залиште свій номер</Modal.Title>
		        </Modal.Header>
		        <Modal.Body className='modaaaal'>
	        		<input type="text" placeholder='Ім`я' value={name} onChange={handleNameChange}/>
	        		<input type="text" placeholder='Телефон' value={tel} onChange={handleTelChange}/>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="primary" className='modalBut' onClick={handleClose}>
		            Відправити
		          </Button>
		        </Modal.Footer>
	      	</Modal>
        </div>
    )
}

export default Footer;