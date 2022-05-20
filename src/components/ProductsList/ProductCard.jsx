import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  ProductContainer,
  Name,
  Price,
  Img,
  TextOutOfStock,
  CartIcon,
} from "../../Style/ProductsStyle";
import GreenCartIcon from "../../images/GreenCartIcon.svg";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      product,
      currentCurrensyType,
      getIdClickedProductCard,
      addProdToCartWithDefAttrs,
    } = this.props;

    const { inStock } = product;
    let stock;
    if (inStock) {
      stock = (
        <CartIcon
          onClick={() => addProdToCartWithDefAttrs(product)}
          src={GreenCartIcon}
        />
      );
    } else {
      stock = <TextOutOfStock>OUT OF STOCK</TextOutOfStock>;
    }

    return (
      <>
        <ProductContainer key={product.id}>
          <Link to="/productpage">
            <Img
              onClick={() => getIdClickedProductCard(product.id)}
              src={product.gallery[0]}
              style={{
                backgroundColor: inStock ? null : "grey",
                opacity: inStock ? 1 : 0.5,
              }}
            />
          </Link>
          {stock}
          <Link to="productpage">
            <Name onClick={() => getIdClickedProductCard(product.id)}>
              {product.name}
            </Name>
            <Price onClick={() => getIdClickedProductCard(product.id)}>
              {product.prices.map((item) => {
                const [symbol] = currentCurrensyType.split(" ");
                if (item.currency.symbol === symbol) return item.amount;
              })}
            </Price>
          </Link>
        </ProductContainer>
      </>
    );
  }
}
