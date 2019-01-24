import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    console.log(this.props.recipe);
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    const { handleDetails } = this.props;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              className="img-card-top"
              style={{ height: "14rem" }}
              src={image_url}
              alt={title}
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                Provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary text-capitalize"
                type="button"
                onClick={() => handleDetails(0, recipe_id)}
              >
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
