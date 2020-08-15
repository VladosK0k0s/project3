import React from "react";
import "./Content.scss";
import Form3 from "./Form3/Form3.jsx";
import LiqForm from "./LiqForm/LiqForm.jsx";
import { Redirect } from "react-router-dom";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: true,
            form: null,
            server_error: false,
            chosed3: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            form3Names: [
                "fullName",
                "IPN",
                "clientAdress",
                "email",
                "phoneNumber",
                "instituteAdress",
                "policemanFullName",
                "instituteName",
                "decreeSeries",
                "decreeNumber",
                "carBrand",
                "carNumber",
                "violationAddress",
                "carSpeedInDecree",
                "carSpeedInDecreeDifference",
                "violationDate",
                "violationTime",
                "homeNumber",
                "sudInfo",
                "statuteNumber",
                "instituteName",
                "sectionOfPdrViolated",
                "truCamNumber",
                "truCamFine",
                "autoFixationTrackNumber",
                "decreeDate",
            ],
            mainObj: {
                fullName: "",
                IPN: "",
                clientAdress: "",
                email: "",
                phoneNumber: "",
                violationAddress: "",
                policemanFullName: "",
                instituteName: "",
                decreeSeries: "",
                decreeNumber: "",
                carBrand: "",
                carNumber: "",
                instituteAdress: "",
                carSpeedInDecree: "",
                carSpeedInDecreeDifference: "",
                violationDate: "",
                violationTime: "",
                homeNumber: "",
                sudInfo: "",
                statuteNumber: "",
                sectionOfPdrViolated: "",
                truCamNumber: "",
                truCamFine: "",
                autoFixationTrackNumber: "",
                decreeDate: "",
            },
            datenotvalidity: false,
            step: 1,
            redirect: false,
        };
        this.handleThirdForm = this.handleThirdForm.bind(this);
        this.Show = this.Show.bind(this);
    }
    componentDidMount() {
        this.setState({ step: this.getStep() });
    }
    handleThirdForm(chosed, id) {
        if (id === 100) this.setState({ datenotvalidity: chosed });
        else
            this.setState({
                chosed3: chosed,
            });
        let newObj = this.state.mainObj;
        newObj[this.state.form3Names[id]] = chosed[id];
        this.setState({
            mainObj: newObj,
        });
    }

    getStep = () => {
        const regexp = /declaration\/(\w+)/;
        let match = "";
        if (regexp.exec(document.location.href)) {
            match = +regexp.exec(document.location.href)[1];
        } else match = 0;
        return match;
    };

    Show(event) {
        event.preventDefault();
        if (this.state.datenotvalidity) return alert("Введіть коректну дату");
        const sendingData = this.state.mainObj;
        const words = sendingData.fullName.split(" ");
        sendingData.firstName = words[1];
        sendingData.lastName = words[0];
        sendingData.patronymic = words[2];
        const NewJSON = JSON.stringify(
            Object.assign(
                sendingData,
                JSON.parse(localStorage.getItem("sendObj"))
            )
        );
        // localStorage.removeItem("sendObj");
        console.log(NewJSON);
        try {
            const url = "https://api.avtoshtraf.com/user/create";
            const response = fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    //'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: NewJSON,
            });
            response.then(
                (res) => {
                    res.text().then((text) => {
                        setTimeout(
                            this.setState({
                                form: text,
                            }),
                            500
                        );
                    });
                },
                (rej) => {
                    this.setState({ server_error: true });
                }
            );
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.state.step !== this.getStep()) {
            this.setState({
                redirect: false,
                step: this.getStep(),
            });
        }
    }
    render() {
        let r = /name="data" value="(.*?)"/;
        let r2 = /name="signature" value="(.*?)"/;
        var myArray1 = r.exec(this.state.form);
        var myArray2 = r2.exec(this.state.form);
        let firstval = myArray1 ? myArray1[1] : null;
        let secondval = myArray2 ? myArray2[1] : null;
        if (this.state.redirect) {
            const curent = this.state.step;
            return <Redirect push to={`/declaration/${curent + 1}`} />;
        }
        return (
            <div className="Content">
                <h1>Cформувати позов</h1>
                <form onSubmit={this.Show}>
                    <Form3
                        data={this.state.chosed3}
                        handleThirdForm={this.handleThirdForm}
                        step={this.state.step}
                    />
                    {secondval !== null &&
                    firstval !== null &&
                    secondval !== undefined &&
                    firstval !== undefined ? (
                        ""
                    ) : this.state.step === 3 ? (
                        <button type="submit">Відправити</button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => this.setState({ redirect: true })}
                        >
                            Далі
                        </button>
                    )}
                </form>
                {secondval !== null &&
                firstval !== null &&
                secondval !== undefined &&
                firstval !== undefined ? (
                    <div>
                        <LiqForm firstval={firstval} secondval={secondval} />
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Content;
