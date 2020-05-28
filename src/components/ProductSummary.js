import React from "react";
import { withRouter} from "react-router-dom";

function ProductSummary(props) {

const handleClick = (id) => {
  props.history.push(`/products/${id}`)
}

  return (
    <div onClick={() => handleClick(props.product.id)} className="productSummary">
      {props.product.name} - {props.product.price}{" "}
      <span className="productArrow">></span>
    </div>
  );
}

export default withRouter(ProductSummary);
