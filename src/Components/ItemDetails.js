import React, { Component } from "react";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "react-bootstrap/Form";
export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      didMount: false,
    };
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedFilmId !== this.props.selectedFilmId) {
      fetch(
        `http://www.omdbapi.com/?i=${this.props.selectedFilmId}&apikey=19e2a32`
      )
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          this.setState({
            selectedFilm: response,
            didMount: true,
          });
        });
    }
  };
  render() {
    return (
      <>
        {this.state.didMount ? (
          <Modal isOpen={this.props.itemDetailsIsOpen}>
            <ModalHeader> {this.state.selectedFilm.Title} </ModalHeader>
            <ModalBody>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div
                  className="product-grid-item-content"
                  style={{
                    marginLeft:
                      this.state.selectedFilm.Poster === "N/A" ? "-5%" : "17%",
                  }}
                >
                  <img
                    src={
                      this.state.selectedFilm.Poster === "N/A"
                        ? require("../images/film.jpg")
                        : this.state.selectedFilm.Poster
                    }
                    alt={this.state.selectedFilm.Title}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Actors : {this.state.selectedFilm.Actors}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Awards : {this.state.selectedFilm.Awards}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Country : {this.state.selectedFilm.Country}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Language : {this.state.selectedFilm.Language}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {" "}
                  Runtime : {this.state.selectedFilm.Runtime}
                </Form.Label>
              </Form.Group>
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.props.close_details}>Close</Button>
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}
      </>
    );
  }
}
