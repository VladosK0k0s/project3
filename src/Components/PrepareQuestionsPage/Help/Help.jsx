import React from "react";
import "./Help.scss";
import { NavLink, Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            telephone: "",
            email: "",
            visible: false,
            isSuccess: null,
            isError: null,
        };
    }

    sendToBot = (chat_id) => {
        let token = "924006252:AAGeH5YrETiMrQ1qtxYpdpHYjBmTKZtB0Ak";
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Name: ${this.state.name}, Telephone: ${this.state.telephone}, Email: ${this.state.email},.`;
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    };
    handleClick = () => {
        let chat_ids = ["361102402", "668582787"];
        Promise.all(
            chat_ids.map((id) => {
                return this.sendToBot(id);
            })
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const response = fetch("https://api.avtoshtraf.com/lawyerHelp", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.telephone,
                email: this.state.email,
            }),
        });
        response.then((data) => {
            this.handleClick();
            this.setState({
                name: "",
                telephone: "",
                email: "",
                isSuccess: false,
                isError: false,
            });
            if (data.status === 200) {
                this.setState({
                    isSuccess: true,
                });
            } else {
                this.setState({
                    isError: true,
                });
            }
        });
    };
    render() {
        const {
            name,
            telephone,
            email,
            visible,
            isError,
            isSuccess,
        } = this.state;
        return (
            <div className="Help">
                <h5>
                    На жаль, шанси на оскарження вашої постанови досить низька
                    та Ви не зможете скористатися нашим сервісом
                    <br />
                    Але Ви зможете звернутися до наших адвокатів та вони можуть
                    проаналізувати індивідуально Вашу ситуацію
                </h5>
                {visible ? (
                    <>
                        <form
                            onSubmit={(e) => {
                                this.handleSubmit(e);
                            }}
                        >
                            <label>
                                Прізвище, ім'я
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) =>
                                        this.setState({
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Телефон
                                <input
                                    required
                                    name="telephone"
                                    type="telephone"
                                    value={telephone}
                                    onChange={(e) =>
                                        this.setState({
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Email
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        this.setState({
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <button type="submit">Надіслати</button>
                        </form>
                        {isSuccess === true && (
                            <Alert variant="success">
                                <p className="mb-0">Успішно!</p>
                            </Alert>
                        )}
                        {isError === true && (
                            <Alert variant="success">
                                <p className="mb-0">Успішно!</p>
                            </Alert>
                        )}
                    </>
                ) : (
                    <>
                        <p>Бажаєте звернутися до адвокатів?</p>
                        <div>
                            <button
                                className="customButton"
                                onClick={() => this.setState({ visible: true })}
                            >
                                Так
                            </button>
                            <NavLink to="/">
                                <button className="customButton">Ні</button>
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Help;
