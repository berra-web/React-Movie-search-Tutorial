import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";
import { connect } from "react-redux";
import { storeData } from "../redux";

const types = [
  { label: "All", value: null },
  { label: "Movie", value: "movie" },
  { label: "Series", value: "series" },
  { label: "Episode", value: "episode" },
  { label: "Game", value: "game" },
  
];
class TypesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      ismounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      type: this.props.searchType,
      ismounted: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.ismounted ? (
          <Dropdown
            value={this.state.type}
            options={types}
            onChange={(e) => {
              this.props.storeData({varName:"searchType" ,data: e.value });
              this.setState({ type: e.value });
             
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchType: state.filmStore.searchType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypesDropdown);
