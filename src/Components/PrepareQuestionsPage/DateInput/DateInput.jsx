import React from "react";
import "./DateInput.scss";

class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }
    handleClick = () => {
        const { date } = this.state;
        if (date !== "") {
            const dateObj = new Date(date);
            if (dateObj !== NaN) {
                const deadLineDate = new Date();
                deadLineDate.setDate(deadLineDate.getDate() - 10);
                if (deadLineDate > dateObj) {
                    this.props.handleChoose("no");
                } else {
                    this.props.handleChoose("yes_", {
                        decreeRecieveDate: dateObj.toLocaleDateString(),
                    });
                }
            }
        }
    };
    getMaxDate = () => {
        const date = new Date();
        return date.toJSON().split("T")[0];
    };
    render() {
        this.getMaxDate();
        return (
            <div className="DateInput">
                <input
                    type="date"
                    onChange={(e) => this.setState({ date: e.target.value })}
                    max={this.getMaxDate()}
                />
                <button onClick={() => this.handleClick()}>Далі</button>
            </div>
        );
    }
}

export default DateInput;
