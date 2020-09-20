import React, { Component } from "react";
import "./SorryPage.scss";

class SorryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="SorryPage">
                <h1>Вибачте,</h1>
                <p>але, на жаль, ми не зможемо вам допоиогти</p>
            </div>
        );
    }
}

export default SorryPage;
