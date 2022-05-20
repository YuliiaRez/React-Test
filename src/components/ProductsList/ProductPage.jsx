import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  AddToCart,
  Imgs,
  MainImg,
  Specs,
  Attr,
  Brand,
  Name,
  SubName,
  Price,
  OrderContainer,
  SubImg,
  ProductDescription,
  ChosenColoredSpec,
  AddToCartNotAvailable,
} from "./ProductListStyle";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      productWithAttributesForCart: {},
      attrSelected: [],
    };
  }

  setCurrentImage = (img) => {
    const { productCardClicked } = this.props;
    const { gallery } = productCardClicked;
    this.setState({
      currentImage: gallery.indexOf(img),
      bordColor: "",
    });
  };

  transformDescription = () => {
    const { productCardClicked } = this.props;
    let result = [];
    const { description } = productCardClicked;
    const parser = new DOMParser();
    const descriptionAsHTML = parser
      .parseFromString(description, "text/html")
      .getElementsByTagName("body");
    for (let child of descriptionAsHTML[0].children) {
      result.push(child);
    }
    return result;
  };

  render() {
    const { productCardClicked, currentCurrensyType, addProductsToCart } =
      this.props;

    const { gallery, brand, name, attributes, inStock } = productCardClicked;
    const description = this.transformDescription();

    const { currentImage, attrSelected } = this.state;
    const [symbol] = currentCurrensyType.split(" ");

    return (
      <>
        <Container>
          <Imgs>
            {gallery.map((img) => (
              <SubImg
                onClick={() => this.setCurrentImage(img)}
                key={img}
                src={img}
              />
            ))}
          </Imgs>
          <MainImg src={gallery[currentImage]} />
          <OrderContainer>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            {attributes.map((attr) => {
              return (
                <div key={uuidv4()}>
                  <SubName>{attr.name}:</SubName>
                  <Specs>
                    {attr.items.map((v, index) => {
                      let ind = null;
                      return (
                        <div key={uuidv4()}>
                          {attr.type === "swatch" && (
                            <ChosenColoredSpec
                              onClick={() => {
                                this.setState({
                                  attrSelected: {
                                    ...attrSelected,
                                    [attr.name]: v.value,
                                  },
                                });
                                ind = index + 1;
                              }}
                              color={v.value}
                              colorBorder={ind ? "green" : "black"}
                            ></ChosenColoredSpec>
                          )}
                          {attr.type === "text" && (
                            <Attr
                              onClick={() => {
                                this.setState({
                                  attrSelected: {
                                    ...attrSelected,
                                    [attr.name]: v,
                                  },
                                });
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
            <SubName>PRICE:</SubName>
            <Price>
              <span>{symbol}</span>
              {productCardClicked.prices.map((item) => {
                if (item.currency.symbol === symbol) return item.amount;
              })}
            </Price>
            {inStock ? (
              <AddToCart
                onClick={() => {
                  addProductsToCart({
                    ...productCardClicked,
                    attrs: attrSelected,
                  });
                }}
              >
                ADD TO CART
              </AddToCart>
            ) : (
              <AddToCartNotAvailable>
                ITEM IS OUT OF STOCK
              </AddToCartNotAvailable>
            )}
            <ProductDescription>
              {description.map((el) => ` ${el.textContent}`)}
            </ProductDescription>
          </OrderContainer>
        </Container>
      </>
    );
  }
}
