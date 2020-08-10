import React from "react";
import "./CourtPicker.scss";
import courts from "../../../../../courts/courts.json";
import court_instances from "../../../../../courts/court_instances.json";
import court_regions from "../../../../../courts/court_regions.json";
import court_types from "../../../../../courts/court_types.json";
import court_states from "../../../../../courts/court_states.json";

class CourtPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtred: [],
        };
    }
    handleChange = (event) => {
        let newObj = courts.find((el) => el.name === event.target.value);
        newObj.instance = court_instances.find(
            (el) => el.code === newObj.instance
        ).name;
        newObj.state = court_states.find(
            (el) => el.code === newObj.state_code
        ).name;
        newObj.region = court_regions.find(
            (el) => el.code === newObj.region_code
        ).name;
        newObj.type = court_types.find(
            (el) => el.code === newObj.type_code
        ).name;
        this.props.onChange(JSON.stringify(newObj));
        console.log(newObj);
    };
    componentDidMount() {
        this.setState({
            filtred: courts.filter((el) => el.state_code == 4),
        });
    }

    render() {
        const { filtred } = this.state;
        return (
            <div className="CourtPicker">
                {filtred.length !== 0 && (
                    <select
                        defaultValue={filtred[0].name}
                        onChange={(e) => this.handleChange(e)}
                    >
                        {filtred.map((el) => {
                            return (
                                <option key={el.id} value={el.oblast}>
                                    {el.name}
                                </option>
                            );
                        })}
                    </select>
                )}
            </div>
        );
    }
}

export default CourtPicker;
