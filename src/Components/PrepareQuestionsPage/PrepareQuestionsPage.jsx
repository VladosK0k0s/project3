import React, { Component } from "react";
import "./PrepareQuestionsPage.scss";
import arrow from "./oplata.png";
import Item from "./Item/Item.jsx";
import { Modal } from "react-bootstrap";
import arrow1 from "./arrow.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink, Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import img from "./Item/Chosed.png";
import DateInput from "./DateInput/DateInput";
import DevicePicker from "./DevicePicker/DevicePicker";
import Pidstavi from "./Pidstavi/Pidstavi";
import OnMain from "./OnMain/OnMain";
import Help from "./Help/Help";
import { eachWeekOfInterval } from "date-fns";

class PrepareQuestionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            url: "",
            sendObj: {},
            alert: false,
            show: true,
            curQuestion: {},
            applyCond: false,
            argCount: 0,
            allQuestionFilled: false,
            mas: [
                {
                    id: 1,
                    text:
                        "Чи заперечували Ви свою вину на місці вчинення правопорушення?",
                },
                {
                    id: 2,
                    text: "Чи був складений протокол?",
                },
                {
                    id: 3,
                    text:
                        "Чи ознайомив Вас співробітник поліції із Вашими правами та обов’язками?",
                },
                {
                    id: 4,
                    text:
                        "Чи запрошувались свідки під час складання протоколу?",
                },
                {
                    id: 5,
                    text: "Чи зазначена в постанові назва приладу?",
                },
                {
                    id: 6,
                    text:
                        "Чи були представлені докази, що пристроєм було заміряно швидкість саме Вашого авто?",
                },
                {
                    id: 7,
                    text:
                        "Чи були представлені докази щорічної перевірки та сертифікації приладу вимірювання швидкості?",
                },
            ],
            chosed: [],
            stepsArr: [
                {
                    id: 1,
                    text:
                        "Коли ви отримали постанову? Звертаю увагу, що оскарження автоштрафу здійснюється виключно протягом 10 днів з дати вручення такої постанови",
                    component: <DateInput handleChoose={this.handleChoose} />,
                    nextYesId: 2,
                    nextNoId: 3,
                },
                {
                    id: 2,
                    text:
                        "За допомогою якого пристрою було зафіксоване порушення ПДР?",
                    component: (
                        <DevicePicker handleChoose={this.handleChoose} />
                    ),
                    nextYesId: 4,
                    nextNoId: 5,
                },
                {
                    id: 3,
                    text:
                        "На жаль ви пропустили строк для оскарження постанови та не зможете скористатися даним сервісом",
                    component: <OnMain />,
                    nextYesId: null,
                    nextNoId: null,
                },
                {
                    id: 4,
                    text: "Вам було роз'яснено Ваші права?",
                    component: null,
                    argumentYes: { wasCustomerAcknowledgedWithLaw: true },
                    argumentNo: { wasCustomerAcknowledgedWithLaw: false },
                    nextYesId: 14,
                    nextNoId: 14,
                    addArgOn: "no",
                },
                {
                    id: 5,
                    text: `Чи додано докази перевищення швидкості 
                        саме автомобілем Скаржника?Таким доказом 
                        може бути чітке зображення транспортного 
                        засобу (зазначено марку, колір, номерний знак) 
                        та, по можливості, водія, що знаходився за кермом`,
                    component: null,
                    argumentYes: { wasEvidenceThatCustomerDriver: true },
                    argumentNo: { wasEvidenceThatCustomerDriver: false },
                    nextYesId: 6,
                    nextNoId: 6,
                    addArgOn: "no",
                },
                {
                    id: 6,
                    text: `Чи можна з прикріплених до Постанови фото  
                    ідентифікувати саме автомобіль Скаржника?`,
                    component: null,
                    argumentYes: { canIdentifyCustomersCar: true },
                    argumentNo: { canIdentifyCustomersCar: false },
                    nextYesId: 7,
                    nextNoId: 7,
                    addArgOn: "no",
                },
                {
                    id: 7,
                    text: `Чи зазначено у Постанові технічний засіб, за допомогою якого відбулася фіксація?`,
                    component: null,
                    argumentYes: { isDeviceSpecified: true },
                    argumentNo: { isDeviceSpecified: false },
                    nextYesId: 8,
                    nextNoId: 8,
                    addArgOn: "no",
                },
                {
                    id: 8,
                    text: `Хто перебував за кермом під час фіксації адміністративного правопорушення?`,
                    component: null,
                    yesText: "Перебував я",
                    noText: "Інша особа (не я)",
                    argumentYes: { wasCustomerDrivingCar: true },
                    argumentNo: { wasCustomerDrivingCar: false },
                    nextYesId: 9,
                    nextNoId: 10,
                },
                {
                    id: 9,
                    text: `Чи зазначені в постанові про адміністративне 
                    правопорушення посилання на конкретне положення ПДР 
                    України, яке Вами порушено?`,
                    component: null,
                    argumentYes: { isReferenceToPDRExists: true },
                    argumentNo: { isReferenceToPDRExists: false },
                    nextYesId: 12,
                    nextNoId: 12,
                    addArgOn: "no",
                },
                {
                    id: 10,
                    text: `Чи наявні у Вас докази, що можуть підтвердити цю обставину? 
                    Наприклад: наказ про відрядження; 
                    показання друзів, знайомих; 
                    був у відпустці чи за кордоном, є квитки`,
                    argumentYes: {
                        areEvidenceThatCustomerWasNotDrivingCarPresent: true,
                    },
                    argumentNo: {
                        areEvidenceThatCustomerWasNotDrivingCarPresent: false,
                    },
                    component: null,
                    nextYesId: 11,
                    nextNoId: 9,
                    addArgOn: "yes",
                },
                {
                    id: 11,
                    text: null,
                    component: <Pidstavi handleChoose={this.handleChoose} />,
                    nextYesId: 9,
                    nextNoId: 9,
                },
                {
                    id: 12,
                    text: `Чи зазначено в постанові про адміністративне правопорушення 
                    посилання на марку, серійний номер технічного засобу, 
                    яким здійснено фото або відеозапис правопорушення?`,
                    component: null,
                    argumentYes: { isReferenceToMarkExists: true },
                    argumentNo: { isReferenceToMarkExists: false },
                    nextYesId: 13,
                    nextNoId: 13,
                    addArgOn: "no",
                },

                {
                    id: 13,
                    text: `та чи містяться відомості про адресу веб-сайту в мережі Інтернет?`,
                    component: null,
                    argumentYes: { isDataAboutSiteExists: true },
                    argumentNo: { isDataAboutSiteExists: false },
                    nextYesId: 200,
                    nextNoId: 200,
                    addArgOn: "no",
                },
                {
                    id: 14,
                    text: `Чи зазначено у Постанові технічний засіб, за допомогою якого відбулася фіксація?`,
                    component: null,
                    argumentYes: { isNameOfDeviceExists: true },
                    argumentNo: { isNameOfDeviceExists: false },
                    nextYesId: 15,
                    nextNoId: 15,
                    addArgOn: "no",
                },
                {
                    id: 15,
                    text: `Чи мали ви можливість надати пояснення стосовно
                     вчиненого правопорушення та заявляти клопотання?`,
                    component: null,
                    argumentYes: { wasOpportunityToExplain: true },
                    argumentNo: { wasOpportunityToExplain: false },
                    nextYesId: 16,
                    nextNoId: 16,
                    addArgOn: "no",
                },
                {
                    id: 16,
                    text: `Чи відмовляли Вам у задоволенні клопотання про надання правової допомоги`,
                    component: null,
                    argumentYes: { wasDeniedToLawHelp: true },
                    argumentNo: { wasDeniedToLawHelp: false },
                    nextYesId: 17,
                    nextNoId: 17,
                    addArgOn: "yes",
                },
                {
                    id: 17,
                    text: `Хто перебував за кермом під час фіксації адміністративного правопорушення?`,
                    component: null,
                    yesText: "Перебував я",
                    noText: "Інша особа (не я)",
                    argumentYes: { wasCustomerDrivingCar: true },
                    argumentNo: { wasCustomerDrivingCar: false },
                    nextYesId: 200,
                    nextNoId: 18,
                },
                {
                    id: 18,
                    text: `Чи наявні у Вас докази, що можуть підтвердити цю обставину? 
                    Наприклад: наказ про відрядження; 
                    показання друзів, знайомих; 
                    був у відпустці чи за кордоном, є квитки`,
                    component: null,
                    argumentYes: {
                        areEvidenceThatCustomerWasNotDrivingCarPresent: true,
                    },
                    argumentNo: {
                        areEvidenceThatCustomerWasNotDrivingCarPresent: false,
                    },
                    nextYesId: 19,
                    nextNoId: 200,
                    addArgOn: "yes",
                },
                {
                    id: 19,
                    text: null,
                    component: <Pidstavi handleChoose={this.handleChoose} />,
                    nextYesId: 200,
                    nextNoId: 200,
                },
                {
                    id: 200,
                },
            ],
        };
    }
    componentDidMount() {
        this.setState({
            curQuestion: this.state.stepsArr[0],
            chosed: [1],
        });
    }
    componentDidUpdate() {
        console.log(this.state.sendObj, this.state.argCount);
    }
    handleGetBack = () => {
        this.setState({
            curQuestion: this.state.stepsArr.find(
                (el) => el.id == this.state.chosed[this.state.chosed.length - 2]
            ),
            chosed: this.state.chosed.slice(0, this.state.chosed.length - 1),
        });
    };

    handleChoose = (status, obj) => {
        const { curQuestion } = this.state;
        if (status === "yes") {
            if (curQuestion.argumentYes) {
                this.setState({
                    sendObj: Object.assign(
                        this.state.sendObj,
                        curQuestion.argumentYes
                    ),
                });
            }
            if (curQuestion.addArgOn === "yes") {
                this.addArgument();
            }
            const idObj = this.state.stepsArr.find(
                (el) => el.id === curQuestion.nextYesId
            );
            this.setState({
                curQuestion: idObj,
                chosed: [...this.state.chosed, idObj.id],
            });
            if (curQuestion.nextYesId === 200) {
                localStorage.setItem(
                    "sendObj",
                    JSON.stringify(this.state.sendObj)
                );
                localStorage.setItem("passed", JSON.stringify({ pass: true }));
                this.setState({
                    allQuestionFilled: true,
                });
            }
        } else if (status === "no") {
            if (curQuestion.argumentNo) {
                this.setState({
                    sendObj: Object.assign(
                        this.state.sendObj,
                        curQuestion.argumentNo
                    ),
                });
            }
            if (curQuestion.addArgOn === "no") {
                this.addArgument();
            }
            const idObj = this.state.stepsArr.find(
                (el) => el.id === curQuestion.nextNoId
            );
            this.setState({
                curQuestion: idObj,
                chosed: [...this.state.chosed, idObj.id],
            });
            if (curQuestion.nextNoId === 200) {
                localStorage.setItem(
                    "sendObj",
                    JSON.stringify(this.state.sendObj)
                );
                localStorage.setItem("passed", JSON.stringify({ pass: true }));
                this.setState({
                    allQuestionFilled: true,
                });
            }
        } else {
            if (status === "yes_") {
                const idObj = this.state.stepsArr.find(
                    (el) => el.id === curQuestion.nextYesId
                );
                this.setState({
                    curQuestion: idObj,
                    chosed: [...this.state.chosed, idObj.id],
                    sendObj: Object.assign(this.state.sendObj, obj),
                });
                if (curQuestion.nextYesId === 200) {
                    localStorage.setItem(
                        "sendObj",
                        JSON.stringify(this.state.sendObj)
                    );
                    localStorage.setItem(
                        "passed",
                        JSON.stringify({ pass: true })
                    );
                    this.setState({
                        allQuestionFilled: true,
                    });
                }
            } else if (status === "no_") {
                const idObj = this.state.stepsArr.find(
                    (el) => el.id === curQuestion.nextNoId
                );
                this.setState({
                    curQuestion: idObj,
                    chosed: [...this.state.chosed, idObj.id],
                    sendObj: Object.assign(this.state.sendObj, obj),
                });
                if (curQuestion.nextNoId === 200) {
                    localStorage.setItem(
                        "sendObj",
                        JSON.stringify(this.state.sendObj)
                    );
                    localStorage.setItem(
                        "passed",
                        JSON.stringify({ pass: true })
                    );
                    this.setState({
                        allQuestionFilled: true,
                    });
                }
            }
        }
    };

    addArgument = () => {
        console.log("added");
        this.setState({ argCount: this.state.argCount + 1 });
    };

    handleapplyCond = () => {
        return this.setState({ applyCond: !this.state.applyCond });
    };
    setalert = (e) => {
        e.preventDefault();
        this.setState({ alert: true });
    };
    handleClose = () => {
        if (this.state.applyCond) return this.setState({ show: false });
        else return;
    };
    render() {
        const { curQuestion, allQuestionFilled, argCount, chosed } = this.state;
        console.log("curQuestion", curQuestion);
        console.log("chosed", chosed);
        if (allQuestionFilled && argCount > 0) {
            return <Redirect to={`/declaration/1`} />;
        }
        if (allQuestionFilled && argCount === 0) {
            return (
                <div className="PrepareQuestionsPage">
                    <Help />
                </div>
            );
        }
        return (
            <div className="PrepareQuestionsPage">
                <h1>Cформувати позов</h1>
                {curQuestion.id && (
                    <div className="QuestionBlock">
                        {curQuestion.text && <h4>{curQuestion.text}</h4>}
                        {curQuestion.component ? (
                            curQuestion.component
                        ) : (
                            <div className={"AnswerBlock"}>
                                <button
                                    onClick={() => {
                                        this.handleChoose("yes");
                                    }}
                                >
                                    {curQuestion.yesText
                                        ? curQuestion.yesText
                                        : "Так"}
                                </button>
                                <button
                                    onClick={() => {
                                        this.handleChoose("no");
                                    }}
                                >
                                    {curQuestion.noText
                                        ? curQuestion.noText
                                        : "Ні"}
                                </button>
                                <button
                                    onClick={() => {
                                        this.handleGetBack();
                                    }}
                                >
                                    Назад
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <Modal
                    dialogClassName={"Modal2"}
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard="false"
                    size="lg"
                    animation={true}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title className="ModalTitle2">
                            Застереження:
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modaaaal2">
                        <div className="items">
                            <div>
                                <img src={arrow1} alt="" />
                                <p>
                                    Просимо Вас бути уважними під час заповнення
                                    даних необхідних для формування позову.
                                </p>
                            </div>
                            <div>
                                <img src={arrow1} alt="" />
                                <p>
                                    Якщо Ви вже оплатили цей штраф, то наші
                                    послуги не є для Вас актуальними.
                                </p>
                            </div>
                            <div>
                                <img src={arrow1} alt="" />
                                <p>
                                    Ми не несемо відповідальності у разі
                                    постановлення ухвали суду не на Вашу
                                    користь.
                                </p>
                            </div>
                            <div>
                                <img src={arrow1} alt="" />
                                <p>
                                    Ця форма використовується лише для генерації
                                    тексту позовної заяви. Ми не збираємо і не
                                    зберігаємо інформацію, яку ви вводите.
                                </p>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    id="scales"
                                    checked={this.state.applyCond}
                                    onClick={this.handleapplyCond}
                                />
                                <p>
                                    Погоджуюсь з{" "}
                                    <NavLink to="/offer">
                                        умовами Публічної оферти
                                    </NavLink>{" "}
                                    та{" "}
                                    <NavLink to="/policy">
                                        умовами Політики конфіденційності
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="buttons">
                            <NavLink to="/">На головну</NavLink>
                            <button
                                style={{ whiteSpace: "nowrap" }}
                                onClick={this.handleClose}
                            >
                                Ознайомлений(-а)
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PrepareQuestionsPage;
