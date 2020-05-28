import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ProductDetail extends Component {
  state = {
    product: this.getProductFromList(),
  };

  getProductFromList() {
    const productId = this.props.match.params.productId;
    let product =
      this.props.productList.find((p) => p.id === parseInt(productId)) || {};
    
    return product;
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.setState({product: this.getProductFromList()})
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.product.name}</h3>
        <div>Price: ${this.state.product.price}</div>
        <p>{this.state.product.description}</p>
        <Link className="productGoBackLink" to="/products">
          Go Back
        </Link>
      </div>
    );
  }
}

export default withRouter(ProductDetail);
