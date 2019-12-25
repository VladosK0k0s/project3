import React from "react";
/* global google */


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    console.log(place);
  }



  render() {
    return (
        <input 
          ref={this.autocompleteInput}  
          id="autocomplete" 
          placeholder=""
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          >
            
        </input>
    );
  }
}

export default Search;