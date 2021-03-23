import React, { Component } from "react";
import { connect } from "react-redux";
import { storeData } from "../redux";
import FilmsGrid from './FilmsGrid'
class FilmsGridWrapper extends Component {
    constructor(storeData) {
        super();
        this.state = {
          ismounted: false,
        };
      }
      componentDidMount = () => {
        this.setState({
          ismounted: true,
        });
      };
    render() {
       
        return (
            <div>
                {this.state.ismounted?
                <FilmsGrid  
                year= {this.props.year}
                title= {this.props.title}
                searchType= {this.props.searchType}
                
                />:""}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    year: state.filmStore.year,
    title:state.filmStore.title,
    searchType:state.filmStore.searchType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsGridWrapper);
