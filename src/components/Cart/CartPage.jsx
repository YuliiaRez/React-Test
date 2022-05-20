import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import {
  CartHeader,
  CartContainer,
  Price,
  CheckoutBtn,
  Tax,
  Quantaty,
} from "./CartPageStyle";
import ItemCartPage from "./ItemCartPage";

export default class CartPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsCartPageOpened();
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
        <CartHeader>CART</CartHeader>
        {productsInCart.map((item, index) => {
          return (
            <ItemCartPage
              key={uuidv4()}
              item={item}
              index={index}
              currentCurrensyType={currentCurrensyType}
              increaseItemCounter={increaseItemCounter}
              decreaseItemCounter={decreaseItemCounter}
            ></ItemCartPage>
          );
        })}
        <Tax>
          {"Tax 21%: " +
            (productsInCart.length > 0
              ? `${symbol}${(0.21 * totalPriceOfCart).toFixed(2)}`
              : 0)}
        </Tax>
        <Quantaty>
          {"Quantaty: " +
            (productsInCart.length > 0
              ? `${productsInCart
                  .map((item) => item.amountInCart)
                  .reduce((sum, current) => sum + current)}`
              : 0)}
        </Quantaty>
        <Price>
          {"Total: " +
            (productsInCart.length > 0
              ? `${symbol}${totalPriceOfCart.toFixed(2)}`
              : 0)}
        </Price>
        <CheckoutBtn>ORDER</CheckoutBtn>
      </CartContainer>
    );
  }
}
