import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ImgArrow from "../../images/ImgArrow.svg";
import {
  ContentPlacement,
  Img,
  ArrowsSliderNext,
  ArrowsSliderPrev,
  ImgContainer,
  Brand,
  Name,
  Price,
  CounterContainer,
  CounterBtn,
  InfoContainer,
  ArrowsContainer,
  CartSpec,
  Specs,
  ColoredSpec,
  Attr,
  Counter,
} from "./CartPageStyle";

export default class ItemCartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfPage: 0,
    };
  }
  sliderOnclick = (direction, item) => {
    let indexImg = this.state.indexOfPage;
    if (direction === "next") {
      indexImg = indexImg > 0 ? indexImg - 1 : item.gallery.length - 1;
    }
    if (direction === "prev") {
      indexImg = indexImg < item.gallery.length - 1 ? indexImg + 1 : 0;
    }
    this.setState({
      indexOfPage: indexImg,
    });
  };

  render() {
    const {
      currentCurrensyType,
      item,
      index,
      increaseItemCounter,
      decreaseItemCounter,
    } = this.props;
    const { sliderOnclick } = this;
    const { indexOfPage } = this.state;
    const { attributes, attrs } = item;

    return (
      <ContentPlacement>
        <InfoContainer>
          <Brand>{item.brand}</Brand>
          <Name>{item.name}</Name>
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
        </InfoContainer>

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
        {item.gallery.length > 1 ? (
          <ImgContainer>
            <Img src={item.gallery[indexOfPage]} />
            <ArrowsContainer>
              <ArrowsSliderNext
                onClick={() => sliderOnclick("next", item)}
                src={ImgArrow}
              />
              <ArrowsSliderPrev
                onClick={() => sliderOnclick("prev", item)}
                src={ImgArrow}
              />
            </ArrowsContainer>
          </ImgContainer>
        ) : (
          <ImgContainer>
            <Img src={item.gallery[0]} />
          </ImgContainer>
        )}
      </ContentPlacement>
    );
  }
}
