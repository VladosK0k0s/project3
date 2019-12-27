import React from 'react';
import './Footer.scss';
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from './Group164.png';
import i2 from './Group165.png';

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
                <div className='Section1_1'>
                    <p>
                        04050, м. Київ, вул. Мельникова, буд. 12
                    </p>
                    <p>
                        ТОВ «2Х2 Фінанс»
                    </p>
                </div>
                <div className='Section1_2'>
                    <div>
                        <h5>Партнери</h5>
                    </div>
                    <div>
                        <h5>Реклама</h5>
                    </div>
                </div>
                <button onClick={handleShow}>ЗВ’ЯЗАТИСЯ З НАМИ</button>
                <div className='Section1_2_mobile'>
                    <div>
                        <h5>Партнери</h5>
                    </div>
                    <div>
                        <h5>Реклама</h5>
                    </div>
            </div>
            <Modal dialogClassName={'Modal'} show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter"
      centered>
		        <Modal.Header closeButton>
		          <Modal.Title className='ModalTitle'>Зв’язатись з нами</Modal.Title>
		        </Modal.Header>
		        <Modal.Body className='modaaaal'>
                    <a href="mailto:2x2andfinance@gmail.com">
                        <img src={i1}/>
                    </a>
                    <a href="https://t.me/tech_support_ashcom_bot">
                        <img src={i2}/>
                    </a>
		        </Modal.Body>
	      	</Modal>
        </div>
    )
}

export default Footer;