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
            searchValue: "",
            afterSearch: [],
        };
    }
    handleChange = (value) => {
        let newObj = courts.find((el) => el.name === value);
        if (newObj) {
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
        }
    };
    componentDidMount() {
        this.setState(
            {
                filtred: courts.filter((el) => el.state_code == 4),
            }
            // () => this.handleChange(this.state.filtred[0].name)
        );
    }

    handleSearch = (val) => {
        this.setState({
            searchValue: val,
            afterSearch: this.state.filtred.filter((el) =>
                el.name.includes(val)
            ),
        });
        this.handleChange(val);
    };

    render() {
        const { filtred, searchValue } = this.state;
        return (
            <div className="CourtPicker">
                <input
                    list="character"
                    type="text"
                    value={searchValue}
                    onChange={(e) => this.handleSearch(e.target.value)}
                    placeholder="Виберіть суд"
                />
                {filtred.length !== 0 && (
                    <datalist id="character">
                        {filtred.map((el) => {
                            return (
                                <option
                                    key={el.id}
                                    value={el.name}
                                    onClick={(e) => {
                                        this.handleChange();
                                    }}
                                />
                            );
                        })}
                    </datalist>
                )}
            </div>
        );
    }
}

export default CourtPicker;
