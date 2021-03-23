import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { connect } from "react-redux";
import { storeData } from "../redux";
class MyNavbar extends Component {
  constructor(storeData) {
    super();
    this.state = {
      title: "Pokemon",
      ismounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      ismounted: true,
    });
  };
  handleSearch = () => {
    this.props.storeData({ varName: "title", data: this.state.title });
  };
  render() {
    return (
      <div>
        {this.state.ismounted ? (
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
              <h1>Movies app</h1>
            </Navbar.Brand>

            <Nav className="mr-auto"></Nav>
            <Form inline>
              <div style={{ marginLeft: "-10%" }}>
                <InputText
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                />
              </div>
            </Form>
            <Button label="Search " onClick={this.handleSearch} />
          </Navbar>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
