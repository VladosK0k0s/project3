import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import "./ThankYouPage.scss";
import { FaFileDownload } from "react-icons/fa";
import { Redirect } from "react-router-dom";

class ThankYouPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            url: "",
            status: "pending",
        };
        this.pozovRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.attachmentRef = React.createRef();
    }
    componentDidMount() {
        let regexp = /thankYou\/(\w+)/;
        let match = "";
        if (regexp.exec(document.location.href)) {
            match = regexp.exec(document.location.href)[1];
        } else match = "0";
        this.setState(
            {
                id: match,
                url: `https://api.avtoshtraf.com/user/download/${match}`,
                urlAlg: `https://api.avtoshtraf.com/pdf/download/`,
                urlDescription: `https://api.avtoshtraf.com/user/downloadDescription/${match}`,
                urlCourtFee: `https://api.avtoshtraf.com/user/downloadAttachment/${match}`,
            },
            this.checkUser
        );
    }
    checkUser = () => {
        const promiseRes = fetch(`https://api.avtoshtraf.com/user/status`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({ id: this.state.id }),
        });
        return promiseRes
            .then((response) => {
                return response.json();
            })
            .then((text) => {
                console.log("text", text);
                return JSON.parse(text);
            })
            .then((obj) => {
                this.setState({ status: obj.status });
                return obj.status;
            })
            .then((status) => {
                console.log("status", status);
                if (status !== "error" && status !== "No result")
                    return this.sendMail();
            });
    };
    sendMail = () => {
        try {
            if (this.state.status === "error") return;
            const url = `https://api.avtoshtraf.com/user/sendmail/${this.state.id}`;
            const response = fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    //'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(this.state.mainObj),
                //body: {main: this.state.mainObj}, // тип данных в body должен соответвовать значению заголовка "Content-Type"
            });
            if (response.status !== 404) {
                response.then((res) => "Success");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.descriptionRef.submit();
        setTimeout(() => {
            this.pozovRef.submit();
            setTimeout(() => {
                this.attachmentRef.submit();
            }, 1000);
        }, 1000);
        // this.descriptionRef.submit();
        // console.log(Object.keys(this.pozovRef));
    };
    render() {
        console.log(this.state.status);
        return this.state.status === "success" ||
            this.state.status !== "error" ? (
            // return (
            <div className="ThankYouPage">
                {this.state.status === "success" ? (
                    <>
                        {/* <> */}
                        <h1>Дякуємо!</h1>
                        <form
                            method="get"
                            action={this.state.url}
                            ref={(ref) => (this.pozovRef = findDOMNode(ref))}
                        >
                            <button type="submit">
                                <FaFileDownload />
                                Готовий позов
                            </button>
                        </form>
                        <form
                            method="get"
                            action={this.state.urlCourtFee}
                            ref={(ref) =>
                                (this.attachmentRef = findDOMNode(ref))
                            }
                        >
                            <button type="submit">
                                <FaFileDownload />
                                Судовий збір
                            </button>
                        </form>
                        <form
                            method="get"
                            action={this.state.urlDescription}
                            ref={(ref) =>
                                (this.descriptionRef = findDOMNode(ref))
                            }
                        >
                            <button type="submit">
                                <FaFileDownload />
                                Опис вкладення
                            </button>
                        </form>
                        <form
                            method="get"
                            onSubmit={(e) => this.handleSubmit(e)}
                        >
                            <button type="submit">
                                <FaFileDownload />
                                Усі документи
                            </button>
                        </form>
                        <form method="get" action={this.state.urlAlg}>
                            <button className="algbut" type="submit">
                                <FaFileDownload />
                                Алгоритм дій
                            </button>
                        </form>
                    </>
                ) : (
                    ""
                )}
            </div>
        ) : (
            <Redirect to="/" />
        );
        // )
    }
}

export default ThankYouPage;
