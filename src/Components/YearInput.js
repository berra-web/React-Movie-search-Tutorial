import React, { Component } from "react";
import { InputNumber } from "primereact/inputnumber";
import { connect } from "react-redux";
import { storeData } from "../redux";
class YearInput extends Component {
  constructor(storeData) {
    super();
    this.state = {
      ismounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      value: this.props.year,
      ismounted: true,
    });
  };
  tempValue = null;
  render() {
    return (
      <div>
        {this.state.ismounted ? (
          <InputNumber
            useGrouping={false}
            value={this.state.value}
            placeholder="Year"
            onValueChange={(e) => {
              e.value == null
                ? (this.tempValue = null)
                : (this.tempValue = Number(e.value));
              this.props.storeData({ varName: "year", data: this.tempValue });
              this.setState({ value: this.tempValue });
            }}
            min={0}
            max={new Date().getFullYear()}
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
    year: state.filmStore.year,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YearInput);
