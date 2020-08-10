import React from "react";
import "./Pidstavi.scss";

class Pidstavi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    handleClick = () => {
        if (this.state.text !== "") {
            this.props.handleChoose("yes_", {
                evidenceThatCustomerWasNotDrivingCar: this.state.text,
            });
        }
    };
    render() {
        return (
            <div className="Pidstavi">
                <h4>
                    Напишіть чим підтверджується даний факт, їх треба буде
                    додати до позову
                </h4>
                <ul>
                    Наприклад:
                    <li>Наказ про відрядження</li>
                    <li>показання друзів, знайомих</li>
                    <li>був у відпустці чи за кордоном, є квитки</li>
                </ul>
                <textarea
                    type="text"
                    rows={3}
                    onChange={(e) => this.setState({ text: e.target.value })}
                />
                <button onClick={() => this.handleClick()}>Далі</button>
            </div>
        );
    }
}

export default Pidstavi;
