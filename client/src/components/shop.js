import React, { Component } from 'react'
import axios from "axios";
import img from "../img/testImg1.jpg"
import img2 from "../img/testing123.jpg"

class Shop extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/posts")
            .then(res => {
                const posts = res.data
                this.setState({ posts })
            }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className="posts">
                <div className="card card-body mb-3">
                    <div className="row">
                        <div className="row">
                            <div className="col-sm-6">
                                <br />
                                {this.state.posts.map(person => <p className="text-center">{person.item}</p>)}
                                {this.state.posts.map(person => <p className="text-center">{person.condition}</p>)}
                                {this.state.posts.map(person => <p className="text-center">{person.email}</p>)}
                            </div>
                            <div className="col-sm-6">
                                <p className="text-center">Bid Price:</p>
                                <p className="text-center">Bid End Date Price:</p>
                                <p className="text-center">Buy Now Price:</p>
                                <p className="text-center">Shipping Price:</p>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="">
                                <img className="itemImg" src={img} alt="test" />
                                <img className="itemImg m-3" src={img2} alt="test2" />
                                <img className="itemImg" src={img2} alt="test2" />
                            </div>
                            <br /><br />
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                              nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                  eveniet cum cupiditate aliquam?</p>
                            <input type="number" />
                            <button type="button" className="btn btn-light mr-1">
                                <span className="badge badge-light">Place Bid</span>
                            </button>

                            <a href="post.html" className="btn btn-info mr-1 green">
                                Buy Now
                            </a>
                            <a href="post.html" className="btn btn-info mr-1">
                                Comments
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop

