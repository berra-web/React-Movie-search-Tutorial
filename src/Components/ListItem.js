import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div className="p-col-12"
            onClick={()=>this.props.openDetails(this.props.data.imdbID)}
            >
            <div className="product-list-item">
              <img
                src={
                  this.props.data.Poster === "N/A" ? require("../images/film.jpg") : this.props.data.Poster
                }
                alt={this.props.data.Title}
              />
              <div className="product-list-detail">
                <div className="product-name">{this.props.data.Title}</div>
                <div className="product-description">{this.props.data.Type}</div>
              </div>
            </div>
          </div>
        )
    }
}
