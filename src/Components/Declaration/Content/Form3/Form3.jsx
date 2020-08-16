import React from "react";
import "./Form3.scss";
import InputMask from "react-input-mask";
import { FaCalendarAlt } from "react-icons/fa";
import PopupExample from "./PopUpExample/PopupExample.jsx";
import PlaceInput from "./PlaceInput/PlaceInput.jsx";
import OblastSearch from "./OblastSearch/OblastSearch.jsx";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import CourtPicker from "./CourtPicker/CourtPicker";

class Form3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                "ПІБ особи, щодо якої розглядається справа",
                "ІПН",
                "Адреса проживання",
                "Електронна пошта",
                "Номер телефону",
                "Адреса органу, який видав постанову",
                "Посада, спеціальне звання та ПІБ особи, яка розглядає справу",
                "Назва установи, від якої виписаний протокол",
                "Серія постанови",
                "Номер постанови",
                "Марка і модель авто",
                "Номерний знак авто",
                "Адреса скоєння правопорушення",
                "Швидкість, з якою рухався автомобіль",
                "Швидкість, встановлена на цій вулиці",
                "Дата правопорушення",
                "Час правопорушення",
                "№ будинку / квартири",
                "Дані суду",
                "За якою статтею КУпАП відбулося правопорушення?",
                "Орган, який видав постанову",
                "Який пункт ПДР було порушено?",
                "Введіть номер TruCam, який зазначено у Постанові",
                "Введіть розмір штрафу",
                "Введіть трек-номер Постанови",
                "Введіть дату постанови",
            ],
            placeholders: [
                "Прізвище Ім'я По-батькові",
                "__________",
                "Iндекс, місто, вулиця, будинок, квартира",
                "example@ukr.net",
                "+380__-___-__-__",
                "04050, Київ, вулиця Герцена, 9",
                "Прізвище Ім'я По-батькові",
                "вказано в протоколі",
                "",
                "_______",
                "Mitsubishi Lancer",
                "АА-____-ІЕ",
                "Iндекс, місто, вулиця, будинок, квартира",
                "___ км/год",
                "___ км/год",
                "ДД.ММ.РРРР",
                "__год.:__хв.",
                "",
                "",
                "",
                "Шевченківське УП ГУНП України в м. Києві",
                "",
                "_______",
                "1000 грн",
                "_______",
                "",
            ],
            maxdate: null,
            inputsData: this.props.data,
            showalert: false,
            validity: false,
            curdate: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount = () => {
        const obj = JSON.parse(localStorage.getItem("sendObj"));
        console.log(obj);
        this.setState({ isTrueCam: obj.isTrueCam });
        this.setState({ maxdate: this.todaySet() });
        this.setState({ curdate: Date.now() });
    };
    checkDate = (date) => {
        let today = this.todaySet();
        let todayarr = today.split("-");
        let datearr = date.split("-");
        if (+datearr[0] > +todayarr[0]) return today;
        else if (+datearr[0] >= +todayarr[0] && +datearr[1] > +todayarr[1])
            return today;
        else if (
            +datearr[0] >= +todayarr[0] &&
            +datearr[1] >= +todayarr[1] &&
            +datearr[2] > +todayarr[2]
        )
            return today;
        else return date;
    };
    handleInputChange(event, index) {
        if (index === 18) {
            let newA = this.state.inputsData;
            let data = event;
            newA[index] = data;
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, index);
        } else if (index === 15 || index === 25) {
            let newA = this.state.inputsData;
            let date = event;
            console.log(date);
            if (!date) newA[index] = "";
            else newA[index] = date.toLocaleDateString();
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, index);
        } else if (index === 55) {
            let newA = this.state.inputsData;
            newA[15] = event.target.value;
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, 15);
        } else if (index === 13 || index === 14) {
            let newA = this.state.inputsData;
            console.log(newA);
            console.log(event.target.value);
            newA[index] =
                parseInt(event.target.value) !== NaN
                    ? parseInt(event.target.value)
                    : 0;
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, index);
        } else if (index === 16) {
            let newA = this.state.inputsData;
            newA[index] = event;
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, index);
        } else if (index !== 2) {
            let newA = this.state.inputsData;
            newA[index] = event.target.value;
            if (index === 11 || index === 8)
                newA[index] = newA[index].toUpperCase();
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            return this.props.handleThirdForm(this.state.inputsData, index);
        } else {
            let newA = this.state.inputsData;
            newA[index] = event.target.value;
            this.setState(
                {
                    inputsData: newA,
                },
                this.checkMinDate()
            );
            this.props.handleThirdForm(this.state.inputsData, index);
        }
    }
    checkMinDate = () => {
        let today = new Date();
        today.setDate(today.getDate() - 15);
        let currentarr = this.state.inputsData[15].split("-");
        let currentDate = new Date(
            currentarr[0],
            currentarr[1] - 1,
            currentarr[2]
        );
        if (currentDate <= today)
            this.setState(
                { showalert: true },
                this.props.handleThirdForm(true, 100)
            );
        else
            this.setState(
                { showalert: false },
                this.props.handleThirdForm(false, 100)
            );
    };
    todaySet = () => {
        let today = new Date();
        console.log();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        console.log((today = yyyy + "-" + mm + "-" + dd));
        return today;
    };
    render() {
        let pattern = ".*?";
        if (this.props.step === 1) {
            return (
                <div className="Form3">
                    <label>
                        {this.state.labels[0]}
                        {(() => {})()}
                        <input
                            placeholder={this.state.placeholders[0]}
                            required={this.state.validity}
                            pattern={pattern}
                            maxLength="100"
                            title="Заповніть це поле"
                            type="text"
                            value={this.state.inputsData[0]}
                            onChange={(event) => {
                                this.handleInputChange(event, 0);
                            }}
                        />
                    </label>
                    <label className="fullAdd">
                        {this.state.labels[2]}
                        {(() => {
                            pattern = `.+`;
                            return;
                        })()}
                        <input
                            title="Заповніть це поле"
                            placeholder={this.state.placeholders[2]}
                            required={this.state.validity}
                            type="text"
                            pattern={pattern}
                            value={this.state.inputsData[2]}
                            onChange={(event) => {
                                this.handleInputChange(event, 2);
                            }}
                        />
                    </label>
                    {/* <label className="house">
                            {this.state.labels[17]}
                            {(() => {
                                pattern = `.+`;
                                return;
                            })()}
                            <input
                                title="Заповніть це поле"
                                placeholder={this.state.placeholders[17]}
                                required={this.state.validity}
                                type="text"
                                pattern={pattern}
                                value={this.state.inputsData[17]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 17);
                                }}
                            />
                        </label> */}
                    <div className="b4">
                        <div>
                            <label className="IPN">
                                {this.state.labels[1]}
                                {(() => {
                                    pattern = `\\d{10}`;
                                    return;
                                })()}
                                <InputMask
                                    mask="9999999999"
                                    maskChar="_"
                                    required={this.state.validity}
                                    pattern={pattern}
                                    placeholder={this.state.placeholders[1]}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[1]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 1);
                                    }}
                                />
                            </label>
                            <label className="post">
                                {this.state.labels[3]}
                                {(() => {
                                    pattern = `.+@.+\\..+`;
                                    return;
                                })()}
                                <div>
                                    <input
                                        placeholder={this.state.placeholders[3]}
                                        required={this.state.validity}
                                        pattern={pattern}
                                        maxLength="50"
                                        title="Заповніть це поле"
                                        type="text"
                                        value={this.state.inputsData[3]}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 3);
                                        }}
                                    />
                                    <PopupExample content="На цю адресу буде відправлений документ" />
                                </div>
                            </label>
                            <label className="tel">
                                {this.state.labels[4]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <InputMask
                                    mask="+38099-999-99-99"
                                    maskChar="_"
                                    required={this.state.validity}
                                    pattern={pattern}
                                    placeholder={this.state.placeholders[4]}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[4]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 4);
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="b4_mobile">
                        <div className="tel_IPN_mob">
                            <label className="IPN">
                                {this.state.labels[1]}
                                {(() => {
                                    pattern = `\\d{10}`;
                                    return;
                                })()}
                                <InputMask
                                    mask="9999999999"
                                    maskChar="_"
                                    required={this.state.validity}
                                    pattern={pattern}
                                    placeholder={this.state.placeholders[1]}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[1]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 1);
                                    }}
                                />
                            </label>
                            <label className="tel">
                                {this.state.labels[4]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <InputMask
                                    mask="+38099-999-99-99"
                                    maskChar="_"
                                    required={this.state.validity}
                                    pattern={pattern}
                                    placeholder={this.state.placeholders[4]}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[4]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 4);
                                    }}
                                />
                            </label>
                        </div>
                        <label className="post_mobile">
                            {this.state.labels[3]}
                            {(() => {
                                pattern = `.+@.+\\..+`;
                                return;
                            })()}
                            <div>
                                <input
                                    placeholder={this.state.placeholders[3]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    maxLength="50"
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[3]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 3);
                                    }}
                                />
                                <PopupExample content="На цю адресу буде відправлений документ" />
                            </div>
                        </label>
                    </div>
                    <label className="sud_info">
                        {this.state.labels[18]}
                        {(() => {
                            pattern = `.+`;
                            return;
                        })()}
                        <CourtPicker
                            onChange={(event) => {
                                this.handleInputChange(event, 18);
                            }}
                        />
                    </label>
                </div>
            );
        }
        if (this.props.step === 2) {
            return (
                <div className="Form3">
                    <div className="b4">
                        <div>
                            <label className="Indate">
                                {this.state.labels[15]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <div
                                    hidden={!this.state.showalert}
                                    className="popover"
                                    role="tooltip"
                                >
                                    <h3 className="popover-header">
                                        Є 15 днів на оскарження постанови
                                    </h3>
                                    <div className="popover-body">
                                        Строк оскарження починається з дня
                                        вручення винесеної постанови. Якщо
                                        строки пропущені, постанова оскарженню
                                        не підлягатиме.
                                    </div>
                                </div>
                                <div className="datepickerWrap">
                                    <DatePicker
                                        placeholder={
                                            this.state.placeholders[15]
                                        }
                                        placeholderText={
                                            this.state.placeholders[15]
                                        }
                                        required={this.state.validity}
                                        pattern={pattern}
                                        formatChars={{
                                            "9": "[0-9]",
                                            а: "[А-Яа-яЄєЁёІіЇїь]",
                                        }}
                                        title="Заповніть це поле"
                                        type="date"
                                        max={this.state.maxdate}
                                        value={this.state.inputsData[15]}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 15);
                                        }}
                                    />
                                    <span>
                                        <FaCalendarAlt color="#10c8d2" />
                                    </span>
                                </div>
                            </label>
                            <label className="Intime">
                                {this.state.labels[16]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <TimePicker
                                    placeholder={this.state.placeholders[16]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    title="Заповніть це поле"
                                    type="time"
                                    value={this.state.inputsData[16]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 16);
                                    }}
                                    showSecond={false}
                                    clearIcon={null}
                                    disableClock={true}
                                    format="HH:mm"
                                />
                            </label>
                            <label className="carModel">
                                {this.state.labels[10]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <div>
                                    <input
                                        placeholder={
                                            this.state.placeholders[10]
                                        }
                                        maxLength="100"
                                        required={this.state.validity}
                                        // pattern = {pattern}
                                        title="Заповніть це поле"
                                        type="text"
                                        value={this.state.inputsData[10]}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 10);
                                        }}
                                    />
                                    <PopupExample content="Переписати зі свідоцтва про реєстрацію транспортного засобу" />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="pSeries">
                                {this.state.labels[8]}
                                {(() => {
                                    pattern = `[А-Яа-яЄєІіЇї0-9]+`;
                                    return;
                                })()}
                                <input
                                    placeholder={this.state.placeholders[8]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[8]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 8);
                                    }}
                                />
                            </label>
                            <label className="pNumber">
                                {this.state.labels[9]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <InputMask
                                    mask="9999999"
                                    maskChar="_"
                                    placeholder={this.state.placeholders[9]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[9]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 9);
                                    }}
                                />
                            </label>
                            <label className="CarNumber">
                                {this.state.labels[11]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}

                                <input
                                    maskChar="_"
                                    placeholder={this.state.placeholders[11]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[11]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 11);
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="b4_mobile">
                        <div className="DateTime_mobile">
                            <label className="Intime">
                                {this.state.labels[16]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <TimePicker
                                    placeholder={this.state.placeholders[16]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    showSecond={false}
                                    title="Заповніть це поле"
                                    value={this.state.inputsData[16]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 16);
                                    }}
                                    clearIcon={null}
                                    disableClock={true}
                                    format="HH:mm"
                                />
                            </label>
                            <label className="Indate">
                                {this.state.labels[15]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <div className="datepickerWrap">
                                    <input
                                        placeholder={
                                            this.state.placeholders[15]
                                        }
                                        required={this.state.validity}
                                        pattern={pattern}
                                        formatChars={{
                                            "9": "[0-9]",
                                            а: "[А-Яа-яЄєЁёІіЇїь]",
                                        }}
                                        title="Заповніть це поле"
                                        type="date"
                                        max={this.state.maxdate}
                                        value={this.state.inputsData[15]}
                                        selected={this.state.curdate}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 15);
                                        }}
                                    />
                                    <span>
                                        <FaCalendarAlt color="#10c8d2" />
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div className="CarStats_mobile">
                            <label className="carModel_mobile">
                                {this.state.labels[10]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <div>
                                    <input
                                        placeholder={
                                            this.state.placeholders[10]
                                        }
                                        maxLength="35"
                                        required={this.state.validity}
                                        pattern={pattern}
                                        title="Заповніть це поле"
                                        type="text"
                                        value={this.state.inputsData[10]}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 10);
                                        }}
                                    />
                                    <PopupExample content="Переписати зі свідоцтва про реєстрацію транспортного засобу" />
                                </div>
                            </label>
                            <label className="CarNumber">
                                {this.state.labels[11]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <input
                                    maskChar="_"
                                    placeholder={this.state.placeholders[11]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[11]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 11);
                                    }}
                                />
                            </label>
                        </div>
                        <div className="Postanova_mobile">
                            <label className="pSeries">
                                {this.state.labels[8]}
                                {(() => {
                                    pattern = `[А-Яа-яЄєІіЇї0-9]+`;
                                    return;
                                })()}
                                <input
                                    placeholder={this.state.placeholders[8]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[8]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 8);
                                    }}
                                />
                            </label>
                            <label className="pNumber">
                                {this.state.labels[9]}
                                {(() => {
                                    pattern = `.*?`;
                                    return;
                                })()}
                                <InputMask
                                    mask="9999999"
                                    maskChar="_"
                                    placeholder={this.state.placeholders[9]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[9]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 9);
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                    <label className="Indate Postanova">
                        {this.state.labels[25]}
                        <div className="datepickerWrap">
                            <DatePicker
                                placeholder={this.state.placeholders[25]}
                                placeholderText={this.state.placeholders[25]}
                                required={this.state.validity}
                                pattern={pattern}
                                formatChars={{
                                    "9": "[0-9]",
                                    а: "[А-Яа-яЄєЁёІіЇїь]",
                                }}
                                title="Заповніть це поле"
                                type="date"
                                max={this.state.maxdate}
                                value={this.state.inputsData[25]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 25);
                                }}
                            />
                            <span>
                                <FaCalendarAlt color="#10c8d2" />
                            </span>
                        </div>
                    </label>
                    <label className="PlacePravoporush">
                        {this.state.labels[12]}
                        {(() => {
                            pattern = `.*?`;
                            return;
                        })()}
                        <div>
                            <input
                                placeholder={this.state.placeholders[12]}
                                maxLength="200"
                                required={this.state.validity}
                                pattern={pattern}
                                title="Заповніть це поле"
                                type="text"
                                value={this.state.inputsData[12]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 12);
                                }}
                            />
                            <PopupExample content="Переписати з Постанови" />
                        </div>
                    </label>
                </div>
            );
        }
        if (this.props.step === 3) {
            return (
                <div className="Form3">
                    {this.state.isTrueCam && (
                        <label className="article">
                            {this.state.labels[19]}
                            {(() => {
                                pattern = `.+`;
                                return;
                            })()}
                            <div>
                                <input
                                    placeholder={this.state.placeholders[19]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    maxLength="150"
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[19]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 19);
                                    }}
                                />
                                <PopupExample content="Переписати з Постанови" />
                            </div>
                        </label>
                    )}
                    <label className="authorityName">
                        {this.state.labels[20]}
                        {(() => {
                            pattern = `.+`;
                            return;
                        })()}
                        <input
                            placeholder={this.state.placeholders[20]}
                            required={this.state.validity}
                            pattern={pattern}
                            maxLength="150"
                            title="Заповніть це поле"
                            type="text"
                            value={this.state.inputsData[20]}
                            onChange={(event) => {
                                this.handleInputChange(event, 20);
                            }}
                        />
                    </label>
                    <label className="PlacePravoporush">
                        {this.state.labels[5]}
                        {(() => {
                            pattern = `.*?`;
                            return;
                        })()}
                        <div>
                            <input
                                placeholder={this.state.placeholders[5]}
                                maxLength="200"
                                required={this.state.validity}
                                pattern={pattern}
                                title="Заповніть це поле"
                                type="text"
                                value={this.state.inputsData[5]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 5);
                                }}
                            />
                            <PopupExample content="Переписати з Постанови" />
                        </div>
                    </label>
                    <label className="PoliceName">
                        {this.state.labels[6]}
                        {(() => {
                            pattern = `[А-Яа-яЄєЙйІіЇїь'‘/.,;:- ]+`;
                            return;
                        })()}
                        <div>
                            <input
                                placeholder={this.state.placeholders[6]}
                                maxLength="200"
                                required={this.state.validity}
                                pattern={pattern}
                                title="Заповніть це поле"
                                type="text"
                                value={this.state.inputsData[6]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 6);
                                }}
                            />
                            <PopupExample content="Переписати з Постанови" />
                        </div>
                    </label>

                    <div className="b3">
                        <label className="violation">
                            {this.state.labels[21]}
                            {(() => {
                                pattern = `.+`;
                                return;
                            })()}
                            <input
                                placeholder={this.state.placeholders[21]}
                                maxLength="200"
                                required={this.state.validity}
                                pattern={pattern}
                                title="Заповніть це поле"
                                type="text"
                                value={this.state.inputsData[21]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 21);
                                }}
                            />
                        </label>
                        <label className="CarSpeed">
                            {this.state.labels[13]}
                            {(() => {
                                pattern = `.*?`;
                                return;
                            })()}
                            <div>
                                <InputMask
                                    mask="999 км/год"
                                    maskChar="_"
                                    placeholder={this.state.placeholders[13]}
                                    required={this.state.validity}
                                    pattern={pattern}
                                    formatChars={{
                                        "9": "[0-9]",
                                        а: "[А-Яа-яЄєЁёІіЇїь]",
                                    }}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[13]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 13);
                                    }}
                                />
                                <PopupExample content="Переписати з Постанови" />
                            </div>
                        </label>
                        <label className="CarSpeed">
                            {this.state.labels[14]}
                            {(() => {
                                pattern = `.*?`;
                                return;
                            })()}
                            <InputMask
                                mask="999 км/год"
                                maskChar="_"
                                placeholder={this.state.placeholders[14]}
                                required={this.state.validity}
                                pattern={pattern}
                                formatChars={{
                                    "9": "[0-9]",
                                    а: "[А-Яа-яЄєЁёІіЇїь]",
                                }}
                                title="Заповніть це поле"
                                type="text"
                                value={this.state.inputsData[14]}
                                onChange={(event) => {
                                    this.handleInputChange(event, 14);
                                }}
                            />
                        </label>
                    </div>
                    {this.state.isTrueCam ? (
                        <div className="TrueCam">
                            <label className="number">
                                {this.state.labels[22]}
                                {(() => {
                                    pattern = `\\d{7}`;
                                    return;
                                })()}
                                <InputMask
                                    mask="9999999"
                                    maskChar="_"
                                    required={this.state.validity}
                                    pattern={pattern}
                                    placeholder={this.state.placeholders[22]}
                                    title="Заповніть це поле"
                                    type="text"
                                    value={this.state.inputsData[22]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 22);
                                    }}
                                />
                            </label>
                            <label className="penalty">
                                {this.state.labels[23]}
                                {(() => {
                                    pattern = `.+`;
                                    return;
                                })()}
                                <input
                                    title="Заповніть це поле"
                                    placeholder={this.state.placeholders[23]}
                                    required={this.state.validity}
                                    type="text"
                                    pattern={pattern}
                                    value={this.state.inputsData[23]}
                                    onChange={(event) => {
                                        this.handleInputChange(event, 23);
                                    }}
                                />
                            </label>
                        </div>
                    ) : (
                        <>
                            <div className="NotTrueCam">
                                <label className="trackNumber">
                                    {this.state.labels[24]}
                                    {(() => {
                                        pattern = `\\d{7}`;
                                        return;
                                    })()}
                                    <InputMask
                                        mask="9999999"
                                        maskChar="_"
                                        required={this.state.validity}
                                        pattern={pattern}
                                        placeholder={
                                            this.state.placeholders[24]
                                        }
                                        title="Заповніть це поле"
                                        type="text"
                                        value={this.state.inputsData[24]}
                                        onChange={(event) => {
                                            this.handleInputChange(event, 24);
                                        }}
                                    />
                                </label>
                                <p>
                                    * зазвичай це штамп на конверті. Можна
                                    перевірити чи це той номер
                                    тут:https://track.ukrposhta.ua/tracking_UA.html
                                    Має відображатися дата отримання вами
                                    постанови
                                </p>
                            </div>
                        </>
                    )}
                </div>
            );
        }
        // return (
        //     <div className="Form3">
        //         <label>
        //             {this.state.labels[0]}
        //             {(() => {})()}
        //             <input
        //                 placeholder={this.state.placeholders[0]}
        //                 required={this.state.validity}
        //                 pattern={pattern}
        //                 maxLength="100"
        //                 title="Заповніть це поле"
        //                 type="text"
        //                 value={this.state.inputsData[0]}
        //                 onChange={(event) => {
        //                     this.handleInputChange(event, 0);
        //                 }}
        //             />
        //         </label>
        //         <div className="Address">
        //             <label className="fullAdd">
        //                 {this.state.labels[2]}
        //                 {(() => {
        //                     pattern = `.+`;
        //                     return;
        //                 })()}
        //                 <input
        //                     title="Заповніть це поле"
        //                     placeholder={this.state.placeholders[2]}
        //                     required={this.state.validity}
        //                     type="text"
        //                     pattern={pattern}
        //                     value={this.state.inputsData[2]}
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 2);
        //                     }}
        //                 />
        //             </label>
        //             <label className="house">
        //                 {this.state.labels[17]}
        //                 {(() => {
        //                     pattern = `.+`;
        //                     return;
        //                 })()}
        //                 <input
        //                     title="Заповніть це поле"
        //                     placeholder={this.state.placeholders[17]}
        //                     required={this.state.validity}
        //                     type="text"
        //                     pattern={pattern}
        //                     value={this.state.inputsData[17]}
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 17);
        //                     }}
        //                 />
        //             </label>
        //         </div>
        //         <div className="b4">
        //             <div>
        //                 <label className="IPN">
        //                     {this.state.labels[1]}
        //                     {(() => {
        //                         pattern = `\\d{10}`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="9999999999"
        //                         maskChar="_"
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         placeholder={this.state.placeholders[1]}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[1]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 1);
        //                         }}
        //                     />
        //                 </label>
        //                 <label className="post">
        //                     {this.state.labels[3]}
        //                     {(() => {
        //                         pattern = `.+@.+\\..+`;
        //                         return;
        //                     })()}
        //                     <div>
        //                         <input
        //                             placeholder={this.state.placeholders[3]}
        //                             required={this.state.validity}
        //                             pattern={pattern}
        //                             maxLength="50"
        //                             title="Заповніть це поле"
        //                             type="text"
        //                             value={this.state.inputsData[3]}
        //                             onChange={(event) => {
        //                                 this.handleInputChange(event, 3);
        //                             }}
        //                         />
        //                         <PopupExample content="На цю адресу буде відправлений документ" />
        //                     </div>
        //                 </label>
        //                 <label className="tel">
        //                     {this.state.labels[4]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="+38099-999-99-99"
        //                         maskChar="_"
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         placeholder={this.state.placeholders[4]}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[4]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 4);
        //                         }}
        //                     />
        //                 </label>
        //             </div>

        //             <div>
        //                 <label className="Indate">
        //                     {this.state.labels[15]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <div
        //                         hidden={!this.state.showalert}
        //                         className="popover"
        //                         role="tooltip"
        //                     >
        //                         <h3 className="popover-header">
        //                             Є 15 днів на оскарження постанови
        //                         </h3>
        //                         <div className="popover-body">
        //                             Строк оскарження починається з дня вручення
        //                             винесеної постанови. Якщо строки пропущені,
        //                             постанова оскарженню не підлягатиме.
        //                         </div>
        //                     </div>
        //                     <div className="datepickerWrap">
        //                         <DatePicker
        //                             placeholder={this.state.placeholders[15]}
        //                             placeholderText={
        //                                 this.state.placeholders[15]
        //                             }
        //                             required={this.state.validity}
        //                             pattern={pattern}
        //                             formatChars={{
        //                                 "9": "[0-9]",
        //                                 а: "[А-Яа-яЄєЁёІіЇїь]",
        //                             }}
        //                             title="Заповніть це поле"
        //                             type="date"
        //                             max={this.state.maxdate}
        //                             value={this.state.inputsData[15]}
        //                             onChange={(event) => {
        //                                 this.handleInputChange(event, 15);
        //                             }}
        //                         />
        //                         <span>
        //                             <FaCalendarAlt color="#10c8d2" />
        //                         </span>
        //                     </div>
        //                 </label>
        //                 <label className="Intime">
        //                     {this.state.labels[16]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <TimePicker
        //                         placeholder={this.state.placeholders[16]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         title="Заповніть це поле"
        //                         type="time"
        //                         value={this.state.inputsData[16]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 16);
        //                         }}
        //                         showSecond={false}
        //                         clearIcon={null}
        //                         disableClock={true}
        //                         format="HH:mm"
        //                     />
        //                 </label>
        //                 <label className="carModel">
        //                     {this.state.labels[10]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <div>
        //                         <input
        //                             placeholder={this.state.placeholders[10]}
        //                             maxLength="100"
        //                             required={this.state.validity}
        //                             // pattern = {pattern}
        //                             title="Заповніть це поле"
        //                             type="text"
        //                             value={this.state.inputsData[10]}
        //                             onChange={(event) => {
        //                                 this.handleInputChange(event, 10);
        //                             }}
        //                         />
        //                         <PopupExample content="Переписати зі свідоцтва про реєстрацію транспортного засобу" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div>
        //                 <label className="pSeries">
        //                     {this.state.labels[8]}
        //                     {(() => {
        //                         pattern = `[А-Яа-яЄєІіЇї0-9]+`;
        //                         return;
        //                     })()}
        //                     <input
        //                         placeholder={this.state.placeholders[8]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[8]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 8);
        //                         }}
        //                     />
        //                 </label>
        //                 <label className="pNumber">
        //                     {this.state.labels[9]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="9999999"
        //                         maskChar="_"
        //                         placeholder={this.state.placeholders[9]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[9]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 9);
        //                         }}
        //                     />
        //                 </label>
        //                 <label className="CarNumber">
        //                     {this.state.labels[11]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}

        //                     <input
        //                         maskChar="_"
        //                         placeholder={this.state.placeholders[11]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[11]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 11);
        //                         }}
        //                     />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="b4_mobile">
        //             <div className="tel_IPN_mob">
        //                 <label className="IPN">
        //                     {this.state.labels[1]}
        //                     {(() => {
        //                         pattern = `\\d{10}`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="9999999999"
        //                         maskChar="_"
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         placeholder={this.state.placeholders[1]}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[1]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 1);
        //                         }}
        //                     />
        //                 </label>
        //                 <label className="tel">
        //                     {this.state.labels[4]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="+38099-999-99-99"
        //                         maskChar="_"
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         placeholder={this.state.placeholders[4]}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[4]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 4);
        //                         }}
        //                     />
        //                 </label>
        //             </div>
        //             <label className="post_mobile">
        //                 {this.state.labels[3]}
        //                 {(() => {
        //                     pattern = `.+@.+\\..+`;
        //                     return;
        //                 })()}
        //                 <div>
        //                     <input
        //                         placeholder={this.state.placeholders[3]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         maxLength="50"
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[3]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 3);
        //                         }}
        //                     />
        //                     <PopupExample content="На цю адресу буде відправлений документ" />
        //                 </div>
        //             </label>
        //             <div className="DateTime_mobile">
        //                 <label className="Intime">
        //                     {this.state.labels[16]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <TimePicker
        //                         placeholder={this.state.placeholders[16]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         showSecond={false}
        //                         title="Заповніть це поле"
        //                         value={this.state.inputsData[16]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 16);
        //                         }}
        //                         clearIcon={null}
        //                         disableClock={true}
        //                         format="HH:mm"
        //                     />
        //                 </label>
        //                 <label className="Indate">
        //                     {this.state.labels[15]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <div
        //                         hidden={!this.state.showalert}
        //                         className="popover"
        //                         role="tooltip"
        //                     >
        //                         <div className="arrow"></div>
        //                         <h3 className="popover-header">
        //                             Є 15 днів на оскарження Постанови
        //                         </h3>
        //                         <div className="popover-body">
        //                             Строк оскарження починається з дня вручення
        //                             винесеної Постанови. Якщо строки пропущені,
        //                             Постанова оскарженню не підлягатиме.
        //                         </div>
        //                     </div>
        //                     <div className="datepickerWrap">
        //                         <input
        //                             placeholder={this.state.placeholders[15]}
        //                             required={this.state.validity}
        //                             pattern={pattern}
        //                             formatChars={{
        //                                 "9": "[0-9]",
        //                                 а: "[А-Яа-яЄєЁёІіЇїь]",
        //                             }}
        //                             title="Заповніть це поле"
        //                             type="date"
        //                             max={this.state.maxdate}
        //                             value={this.state.inputsData[15]}
        //                             selected={this.state.curdate}
        //                             onChange={(event) => {
        //                                 this.handleInputChange(event, 25);
        //                             }}
        //                         />
        //                         <span>
        //                             <FaCalendarAlt color="#10c8d2" />
        //                         </span>
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="CarStats_mobile">
        //                 <label className="carModel_mobile">
        //                     {this.state.labels[10]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <div>
        //                         <input
        //                             placeholder={this.state.placeholders[10]}
        //                             maxLength="35"
        //                             required={this.state.validity}
        //                             pattern={pattern}
        //                             title="Заповніть це поле"
        //                             type="text"
        //                             value={this.state.inputsData[10]}
        //                             onChange={(event) => {
        //                                 this.handleInputChange(event, 10);
        //                             }}
        //                         />
        //                         <PopupExample content="Переписати зі свідоцтва про реєстрацію транспортного засобу" />
        //                     </div>
        //                 </label>
        //                 <label className="CarNumber">
        //                     {this.state.labels[11]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <input
        //                         maskChar="_"
        //                         placeholder={this.state.placeholders[11]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[11]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 11);
        //                         }}
        //                     />
        //                 </label>
        //             </div>
        //             <div className="Postanova_mobile">
        //                 <label className="pSeries">
        //                     {this.state.labels[8]}
        //                     {(() => {
        //                         pattern = `[А-Яа-яЄєІіЇї0-9]+`;
        //                         return;
        //                     })()}
        //                     <input
        //                         placeholder={this.state.placeholders[8]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[8]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 8);
        //                         }}
        //                     />
        //                 </label>
        //                 <label className="pNumber">
        //                     {this.state.labels[9]}
        //                     {(() => {
        //                         pattern = `.*?`;
        //                         return;
        //                     })()}
        //                     <InputMask
        //                         mask="9999999"
        //                         maskChar="_"
        //                         placeholder={this.state.placeholders[9]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[9]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 9);
        //                         }}
        //                     />
        //                 </label>
        //             </div>
        //         </div>

        //         <div className="b3">
        //             <label className="PlaceVidpovidach">
        //                 {this.state.labels[5]}
        //                 {(() => {
        //                     pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;: ]+`;
        //                     return;
        //                 })()}
        //                 <PlaceInput
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 5);
        //                     }}
        //                 />
        //             </label>
        //             <label className="CarSpeed">
        //                 {this.state.labels[13]}
        //                 {(() => {
        //                     pattern = `.*?`;
        //                     return;
        //                 })()}
        //                 <div>
        //                     <InputMask
        //                         mask="999 км/год"
        //                         maskChar="_"
        //                         placeholder={this.state.placeholders[13]}
        //                         required={this.state.validity}
        //                         pattern={pattern}
        //                         formatChars={{
        //                             "9": "[0-9]",
        //                             а: "[А-Яа-яЄєЁёІіЇїь]",
        //                         }}
        //                         title="Заповніть це поле"
        //                         type="text"
        //                         value={this.state.inputsData[13]}
        //                         onChange={(event) => {
        //                             this.handleInputChange(event, 13);
        //                         }}
        //                     />
        //                     <PopupExample content="Переписати з Постанови" />
        //                 </div>
        //             </label>
        //             <label className="CarSpeed">
        //                 {this.state.labels[14]}
        //                 {(() => {
        //                     pattern = `.*?`;
        //                     return;
        //                 })()}
        //                 <InputMask
        //                     mask="999 км/год"
        //                     maskChar="_"
        //                     placeholder={this.state.placeholders[14]}
        //                     required={this.state.validity}
        //                     pattern={pattern}
        //                     formatChars={{
        //                         "9": "[0-9]",
        //                         а: "[А-Яа-яЄєЁёІіЇїь]",
        //                     }}
        //                     title="Заповніть це поле"
        //                     type="text"
        //                     value={this.state.inputsData[14]}
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 14);
        //                     }}
        //                 />
        //             </label>
        //         </div>
        //         <label className="PoliceName">
        //             {this.state.labels[6]}
        //             {(() => {
        //                 pattern = `[А-Яа-яЄєЙйІіЇїь'‘/.,;:- ]+`;
        //                 return;
        //             })()}
        //             <div>
        //                 <input
        //                     placeholder={this.state.placeholders[6]}
        //                     maxLength="200"
        //                     required={this.state.validity}
        //                     pattern={pattern}
        //                     title="Заповніть це поле"
        //                     type="text"
        //                     value={this.state.inputsData[6]}
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 6);
        //                     }}
        //                 />
        //                 <PopupExample content="Переписати з Постанови" />
        //             </div>
        //         </label>
        //         <label className="PlacePravoporush">
        //             {this.state.labels[12]}
        //             {(() => {
        //                 pattern = `.*?`;
        //                 return;
        //             })()}
        //             <div>
        //                 <input
        //                     placeholder={this.state.placeholders[12]}
        //                     maxLength="200"
        //                     required={this.state.validity}
        //                     pattern={pattern}
        //                     title="Заповніть це поле"
        //                     type="text"
        //                     value={this.state.inputsData[12]}
        //                     onChange={(event) => {
        //                         this.handleInputChange(event, 12);
        //                     }}
        //                 />
        //                 <PopupExample content="Переписати з Постанови" />
        //             </div>
        //         </label>
        //         {/* <label>{this.state.labels[7]}
        // 			{
        // 				(()=>{pattern = `[А-Яа-яЄєЁёІіЇїь'‘/.,;:]+`; return})()
        // 			}
        // 			<input
        // 				placeholder={this.state.placeholders[7]}
        // 				// required
        // 				// pattern = {pattern}
        // 				maxLength='30'

        // 				title='Заповніть це поле'
        // 				type="text"
        // 				value={this.state.inputsData[7]}
        // 				onChange={(event)=>{this.handleInputChange(event,7)}}
        // 			/>
        // 		</label> */}
        //     </div>
        // );
    }
}

export default Form3;
