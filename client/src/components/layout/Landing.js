import React, { Component } from "react";
import { Link } from "react-router-dom"

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">TB's Ecommerce</h1>
                <p className="lead">
                  {" "}
                  Post items for sale via bid, buy now or both. Buy or bid on any items that you wish.
                </p>
                <hr />
                <Link to="/post" className="btn btn-lg btn-info mr-2">
                  Post Item For Sale
                </Link>
                <Link to="/shop" className="btn btn-lg btn-light">
                  Shop for items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
