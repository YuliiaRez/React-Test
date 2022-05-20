import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  CartContainer,
  CartContent,
  Img,
  BtnContainer,
  CartMiniBtn,
  ProductInfoInCart,
  CartHeader,
  CartSpec,
  Price,
  SpecsCart,
  // CounterContainer,
  // CounterBtn,
  // Counter,
  CheckoutBtn,
} from "./CartMiniStyle";
import ItemCartMini from "./ItemCartMini";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.productsInCart !== prevProps.productsInCart)
      this.props.setTotalPriceOfCart();
  };
  render() {
    const {
      currentCurrensyType,
      productsInCart,
      increaseItemCounter,
      decreaseItemCounter,
      totalPriceOfCart,
    } = this.props;
    const [symbol] = currentCurrensyType.split(" ");

    return (
      <CartContainer>
        <CartHeader>{`My Bag, ${productsInCart.length} items`} </CartHeader>
        {productsInCart.map((item, index) => {
          return (
            <ItemCartMini
              key={uuidv4()}
              item={item}
              index={index}
              currentCurrensyType={currentCurrensyType}
              increaseItemCounter={increaseItemCounter}
              decreaseItemCounter={decreaseItemCounter}
            ></ItemCartMini>
          );
        })}
        <Price>
          {"Total: " +
            (productsInCart.length > 0
              ? `${symbol}  : ${totalPriceOfCart.toFixed(2)}`
              : 0)}
        </Price>
        <BtnContainer>
          <Link to="/cartpage">
            <CartMiniBtn>VIEW BAG</CartMiniBtn>
          </Link>

          <CheckoutBtn>CHECKOUT</CheckoutBtn>
        </BtnContainer>
      </CartContainer>
    );
  }
}
