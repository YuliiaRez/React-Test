import React, { Component } from "react";
import {
  CartContent,
  Img,
  ProductInfoInCart,
  CartSpec,
  Price,
  Specs,
  ColoredSpec,
  Attr,
  CounterContainer,
  CounterBtn,
  Counter,
} from "./CartMiniStyle";
import { v4 as uuidv4 } from "uuid";

export default class ItemCartMini extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      currentCurrensyType,
      item,
      index,
      increaseItemCounter,
      decreaseItemCounter,
    } = this.props;
    const { attributes, attrs } = item;
    const [symbol] = this.props.currentCurrensyType.split(" ");
    // const [currPrice] = this.props.item.prices.filter(
    //   (it) => it.currency.symbol === symbol
    // );
    return (
      <CartContent>
        <ProductInfoInCart>
          <p>{item.brand}</p>
          <CartSpec>{item.name}</CartSpec>
          <Price>
            {item.prices.map((it) => {
              const [symbol] = currentCurrensyType.split(" ");
              if (it.currency.symbol === symbol) {
                return `${symbol} ${it.amount}`;
              }
            })}
          </Price>
          {attributes.map((attr) => {
            return (
              <div key={uuidv4()}>
                <CartSpec>{attr.name}:</CartSpec>
                <Specs>
                  {attr.items.map((v, index) => {
                    return (
                      <div key={uuidv4()}>
                        {attr.type === "swatch" && (
                          <ColoredSpec
                            color={v.value}
                            style={{
                              border:
                                attrs[attr.name] === v.value
                                  ? "6px solid #A4E3B5"
                                  : "2px solid grey",
                            }}
                          ></ColoredSpec>
                        )}
                        {attr.type === "text" && (
                          <Attr
                            style={{
                              backgroundColor:
                                attrs[attr.name].displayValue === v.displayValue
                                  ? "#1D1F22"
                                  : "none",
                              color: "white",
                            }}
                          >
                            {v.displayValue}
                          </Attr>
                        )}
                      </div>
                    );
                  })}
                </Specs>
              </div>
            );
          })}
        </ProductInfoInCart>
        <CounterContainer>
          <CounterBtn
            onClick={() => {
              increaseItemCounter(item);
            }}
          >
            +
          </CounterBtn>

          <Counter>{item.amountInCart}</Counter>
          <CounterBtn
            onClick={() => {
              if (item.amountInCart > 0) {
                decreaseItemCounter(item, index);
              }
            }}
          >
            -
          </CounterBtn>
        </CounterContainer>
        <Img src={item.gallery[0]} />
      </CartContent>
    );
  }
}
