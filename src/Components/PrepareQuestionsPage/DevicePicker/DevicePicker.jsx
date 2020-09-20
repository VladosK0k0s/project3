import React from "react";
import "./DevicePicker.scss";

class DevicePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="DevicePicker">
                <button
                    className="customButton"
                    onClick={() =>
                        this.props.handleChoose("yes_", { isTrueCam: true })
                    }
                >
                    Мобільна камера TruCam
                </button>
                <button
                    className="customButton"
                    onClick={() =>
                        this.props.handleChoose("no_", { isTrueCam: false })
                    }
                >
                    Камера автофіксації
                </button>
            </div>
        );
    }
}

export default DevicePicker;
