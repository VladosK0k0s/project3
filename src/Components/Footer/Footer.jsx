import React from 'react';
import './Footer.scss';
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
                    <p className='Contacts'>
                        www.example.com
                    </p>
                    <p>
                    «компания» ТОВ «2Х2 Фінанс»
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