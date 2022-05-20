import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import cart from "../../images/Cart.svg";
import brandIcon from "../../images/BrandIcon.svg";
import {
  NavbarDiv,
  Left,
  Center,
  Right,
  Category,
  Image,
  CartCounterAndImg,
  Counter,
} from "./NavbarStyle";
import CurrenciesSelect from "../CurrenciesSelect/CurrenciesSelect";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  getCategoriesNames = () => {
    const categoriesNames = [];
    const { productsWithCategory } = this.props;
    let all = productsWithCategory.map((item) => item.category);
    for (let name of all) {
      if (!categoriesNames.includes(name)) {
        categoriesNames.push(name);
      }
    }
    return categoriesNames;
  };
  getProductsByCategory = () => {};
  render() {
    const {
      currenciesTypes,
      currentCurrensyType,
      setCurrentCurrencyType,
      currentCategoryName,
      setCategoryName,
      productsInCart,
      getIdClickedProductCard,
      setTotalPriceOfCart,
      setIsCartPageOpened,
    } = this.props;
    const categoriesNames = this.getCategoriesNames();
    return (
      <>
        <NavbarDiv>
          <Left>
            <Link key={uuidv4()} to="/*">
              <Category
                onClick={() => {
                  setCategoryName("");
                  getIdClickedProductCard("");
                }}
                style={{ color: currentCategoryName ? "#333" : "#53D97C" }}
              >
                ALL
              </Category>
            </Link>

            {categoriesNames.map((item) => (
              <Link key={uuidv4()} to="/*">
                <Category
                  key={item}
                  onClick={() => {
                    setCategoryName(item);
                    getIdClickedProductCard("");
                  }}
                  style={{
                    color: currentCategoryName === item ? "#53D97C" : "#333",
                  }}
                >
                  {item}
                </Category>
              </Link>
            ))}
          </Left>
          <Center>
            <Image src={brandIcon} />
          </Center>
          <Right>
            <CurrenciesSelect
              currenciesTypes={currenciesTypes}
              currentCurrensyType={currentCurrensyType}
              setCurrentCurrencyType={setCurrentCurrencyType}
            />
            <Link to="/overlay">
              <CartCounterAndImg
                onClick={() => {
                  setTotalPriceOfCart();
                  console.log("productsInCart", productsInCart);
                }}
              >
                <Image src={cart} />
                {productsInCart.length > 0 ? (
                  <Counter>
                    {productsInCart.length > 0 &&
                      `${productsInCart
                        .map((item) => item.amountInCart)
                        .reduce((sum, current) => sum + current)}`}
                  </Counter>
                ) : (
                  ""
                )}
              </CartCounterAndImg>
            </Link>
          </Right>
        </NavbarDiv>
      </>
    );
  }
}
