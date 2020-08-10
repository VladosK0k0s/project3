import React from "react";
import "./OnMain.scss";
import { NavLink, Redirect } from "react-router-dom";

class OnMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }
    render() {
        return (
            <div className="OnMain">
                <NavLink to="/">На головну</NavLink>
            </div>
        );
    }
}

export default OnMain;
