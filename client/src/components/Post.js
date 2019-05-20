import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Post extends Component {
  //the constructor is accessible in the react front end
  constructor() {
    // super() brings in props so this.props will now be defined
    super();
    this.state = {
      email: "",
      item: "",
      condition: "",
      description: "",
      startingBid: "",
      buyNow: "",
      bidEndDate: "",
      shippingCost: "",
      img: "",
      errors: {}
    };
  }

  onChange = e => {
    //this setState for the name of the target (name, email, etc.), then sets it to the value of the event target
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    //prevent auto reload on form submit
    e.preventDefault();

    //this is the same as whats in register route backend api
    const newPost = {
      item: this.state.item,
      email: this.state.email,
      condition: this.state.condition,
      description: this.state.description,
      startingBid: this.state.startingBid,
      bidEndDate: this.state.bidEndDate,
      buyNow: this.state.buyNow,
      shippingCost: this.state.shippingCost,
      img: this.state.img
    };

    //sends post to the proxy plus route below
    axios
      .post("/api/posts/", newPost)
      .then(res => console.log(res.data))
      //console logs the data from the error response
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    // putting errors in brackets allows us to grab specific errors from it, (object)
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sell an item</h1>
              <p className="lead text-center">
                Add an item to either bid away or sell.
              </p>
              <form onSubmit={this.onSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <input
                    type="text"
                    //the fist param in classnames always exists
                    //the second param is conditional, so exists when errors.name exists
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.item
                    })}
                    placeholder="Item"
                    name="item"
                    value={this.state.item}
                    onChange={this.onChange}
                  />
                  {errors.item && (
                    <div className="invalid-feedback">{errors.item}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.condition
                    })}
                    placeholder="Condition"
                    name="condition"
                    value={this.state.condition}
                    onChange={this.onChange}
                  />
                  {errors.condition && (
                    <div className="invalid-feedback">{errors.condition}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.startingBid
                    })}
                    placeholder="Starting Bid"
                    name="startingBid"
                    value={this.state.startingBid}
                    onChange={this.onChange}
                  />
                  {errors.startingBid && (
                    <div className="invalid-feedback">{errors.startingBid}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.bidEndDate
                    })}
                    placeholder="Bid End Date"
                    name="bidEndDate"
                    value={this.state.bidEndDate}
                    onChange={this.onChange}
                  />
                  {errors.bidEndDate && (
                    <div className="invalid-feedback">{errors.bidEndDate}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.buyNow
                    })}
                    placeholder="Buy Now"
                    name="buyNow"
                    value={this.state.buyNow}
                    onChange={this.onChange}
                  />
                  {errors.buyNow && (
                    <div className="invalid-feedback">{errors.buyNow}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.shippingCost
                    })}
                    placeholder="Shipping Cost"
                    name="shippingCost"
                    value={this.state.shippingCost}
                    onChange={this.onChange}
                  />
                  {errors.shippingCost && (
                    <div className="invalid-feedback">
                      {errors.shippingCost}
                    </div>
                  )}
                </div>
                <small className="form-text text-muted">
                  Please add an image of the item you selling!
                </small>
                <div className="form-group">
                  <input
                    type="file"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Image"
                    name="img"
                    value={this.state.img}
                    onChange={this.onChange}
                  />
                  {errors.img && (
                    <div className="invalid-feedback">{errors.img}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
