import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom"

class ProductDetail extends Component {
  state = {
    product: this.getProductFromList(),
  };
  componentDidUpdate(prevProps){
   if (this.props !== prevProps){
     this.setState({product: this.getProductFromList() });
   }
  }
  getProductFromList() {
    const productId = parseInt(this.props.match.params.productId)
   return this.props.productList.find(item => item.id ===productId) || {};
    
  };
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