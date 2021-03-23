import React, { Component } from 'react'

export default class GridItem extends Component {
    render() {
        return (
            <div className="p-col-12 p-md-3"
            onClick={()=>this.props.openDetails(this.props.data.imdbID)}
            >
            <div className="product-grid-item-top">
              <div>
                <i className="pi pi-tag product-category-icon"></i>
                <span className="product-category">{this.props.data.Type}</span>
              </div>
            </div>
            <div className="product-grid-item card">
              <div className="product-grid-item-content">
                <img
                  src={
                    this.props.data.Poster === "N/A"
                      ? require("../images/film.jpg")
                      : this.props.data.Poster
                  }
                  alt={this.props.data.Title}
                />
                <div className="product-name">{this.props.data.Title}</div>
                <div className="product-description">{this.props.data.Year}</div>
              </div>
            </div>
            <div className="product-grid-item-bottom">
              <span className="product-id">{this.props.data.imdbID}</span>
            </div>
          </div>
        )
    }
}
