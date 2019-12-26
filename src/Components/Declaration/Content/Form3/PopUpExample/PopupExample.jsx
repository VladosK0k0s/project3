import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import Tooltip from 'react-tooltip-lite';
import './PopUpExample.scss';


class ControlledPopup extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <span>
            <Tooltip content={this.props.content}>
                <FaQuestionCircle style={{fontSize: "calc(10px + 1vw)"}} color='#10c8d2'/>
            </Tooltip>
        </span>  
      );
    }
  }
  
export default ControlledPopup;