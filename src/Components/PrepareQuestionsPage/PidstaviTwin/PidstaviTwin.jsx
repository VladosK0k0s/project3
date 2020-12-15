import React from "react";
import "./PidstaviTwin.scss";

class PidstaviTwin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    handleClick = () => {
        if (this.state.text !== "") {
            this.props.handleChoose("yes_", {
                evidenceThatCustomerWasNotDrivingCar: this.state.text, // was evidenceThatCustomersCarWasElsewhere
                // evidenceThatCustomerWasNotDrivingCar
            });
        }
    };
    render() {
        return (
            <div className="PidstaviTwin">
                <h4>
                    Напишіть чим підтверджується даний факт, їх треба буде
                    додати до позову
                </h4>
                <textarea
                    type="text"
                    rows={3}
                    onChange={(e) => this.setState({ text: e.target.value })}
                />
                <button className='customButton' onClick={() => this.handleClick()}>Далі</button>
            </div>
        );
    }
}

export default PidstaviTwin;
