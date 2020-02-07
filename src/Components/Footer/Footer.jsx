import React from 'react';
import './Footer.scss';
import {Modal, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from './Group164.png';
import i2 from './Group165.png';
import i3 from './visa.png';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            showHelp: false,
            name: "",
            tel: ""
        };
    };
    handleShow = () => this.setState({show: true});
    handleClose = () => this.setState({show: false});
    handleCloseHelp = () => this.setState({showHelp: false});
    handleShowHelp = () => this.setState({showHelp: true});
    handleInputChange = (event) => {
        if(event.target.name === "Name") return this.setState({name: event.target.value});
        if(event.target.name === "Telephone") return this.setState({tel: event.target.value});
    }
    handleClick = () =>{
        if(this.state.tel===""||this.state.name==="") return;
        let token = "924006252:AAGeH5YrETiMrQ1qtxYpdpHYjBmTKZtB0Ak"
        let chat_id = "669613479";
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Name: ${this.state.name}, Telephone: ${this.state.tel}.`
        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                    'Content-Type': 'application/json',
                    //'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(res => this.handleCloseHelp())
    }
    render(){
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
                            <img className="Visa" src={i3} alt="Telegram"/>
                        </div>
                        <div>
                            <button onClick={this.handleShowHelp}>ДОПОМОГА АДВОКАТА</button>
                        </div>
                        <div>
                            <button onClick={this.handleShow}>ЗВ’ЯЗАТИСЯ З НАМИ</button>
                        </div>
                    </div>
                    <div className='Section1_2_mobile'>
                        <div>
                            <button onClick={this.handleShowHelp}>ДОПОМОГА АДВОКАТА</button>
                            <button onClick={this.handleShow}>ЗВ’ЯЗАТИСЯ З НАМИ</button>
                        </div>
                        <img className="Visa" src={i3} alt="Telegram"/>
                    </div>
                <Modal dialogClassName={'Modal'} show={this.state.show} onHide={this.handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter"
        centered>
                    <Modal.Header closeButton>
                        <Modal.Title className='ModalTitle'>Зв’язатись з нами</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modaaaal'>
                        <a href="mailto:CO2x2finance@gmail.com">
                            <img src={i1} alt="Mail"/>
                            
                        </a>
                        <a href="https://t.me/tech_support_ashcom_bot">
                            <img src={i2} alt="Telegram"/>
                        </a>
                    </Modal.Body>
                </Modal>
                <Modal  size="lg" show={this.state.showHelp} onHide={this.handleCloseHelp} animation={true} aria-labelledby="contained-modal-title-vcenter"
        centered>
                    <Modal.Header closeButton>
                    <Modal.Title className='ModalTitle'>
                        ДОПОМОГА АДВОКАТА
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="ModalBodyHelp">
                        <p>
                            Якщо у Вас нестандартний випадок або складна ситуація, 
                            яка потребує кваліфікованої юридичної допомоги – зазначте номер Вашого телефону.
                            Наш адвокат невідкладно зв’яжеться з Вами.
                        </p>
                        <div>
                            <label>
                                <input type="text" name="Name" placeholder="Ім'я" value={this.state.name} onChange={(e) => this.handleInputChange(e)}/>
                            </label>
                            <label>
                                <input type="text" name="Telephone" placeholder="Номер телефону" value={this.state.tel} onChange={(e) => this.handleInputChange(e)}/>
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{backgroundColor: "#07CAD3", borderColor: "#07CAD3" }} onClick={this.handleClick}>Надіслати</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
};

export default Footer;