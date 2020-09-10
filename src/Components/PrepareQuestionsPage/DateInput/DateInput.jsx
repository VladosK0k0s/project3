import React from "react";
import "./DateInput.scss";
import DatePicker, { registerLocale } from "react-datepicker";
import { uk } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("uk", uk);

class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
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
                <DatePicker
                    locale="uk"
                    dateFormat="P"
                    selected={this.state.date}
                    onChange={(val) => this.setState({ date: val })}
                    maxDate={new Date()}
                />
                <button onClick={() => this.handleClick()}>Далі</button>
            </div>
        );
    }
}

export default DateInput;
