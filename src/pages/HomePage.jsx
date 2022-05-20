import React, { Component } from "react";
import { gql } from "@apollo/client";
import { client } from "../client";
import { Routes, Route } from "react-router-dom";

import { GET_ALL_PRODUCTS, GET_ALL_CURRENCIES } from "../query";
import { Container } from "./HomePageStyled";

import Navbar from "../components/Navbar/Navbar";
import CategoryPage from "../components/ProductsList/CategoryPage";
import CartPage from "../components/Cart/CartPage";
import CartMini from "../components/Cart/CartMini";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrensyType: "$ USD",
      currenciesTypes: [],
      currentCategoryName: null,
      productsWithCategory: [],
      productsInCart: [],
      idProductCardClicked: "",
      totalPriceOfCart: 0,
      isCartPageOpened: false,
    };
  }

  addProdToCartWithDefAttrs = (clickedProd) => {
    const { productsInCart } = this.state;
    const { attributes } = clickedProd;
    const [attrs] = attributes.map((it) => ({
      [it.name]: it.items[0],
    }));
    this.setState({
      productsInCart: [
        ...productsInCart,
        { ...clickedProd, attrs: { ...attrs }, amountInCart: 1 },
      ],
    });
  };
  addProductsToCart = (productNew) => {
    const { productsInCart } = this.state;
    this.setState({
      productsInCart: [...productsInCart, { ...productNew, amountInCart: 1 }],
    });
  };
  setTotalPriceOfCart = () => {
    const { productsInCart, currentCurrensyType } = this.state;

    this.setState({
      totalPriceOfCart: productsInCart
        .map((item) => {
          const [symbol] = currentCurrensyType.split(" ");
          return (
            item.prices.filter((item) => item.currency.symbol === symbol)[0]
              .amount * item.amountInCart
          );
        })
        .reduce((sum, current) => sum + current, 0),
    });
  };
  decreaseItemCounter = (item, index) => {
    const productsInCart = [...this.state.productsInCart];
    item.amountInCart -= 1;
    if (item.amountInCart === 0) {
      productsInCart.splice(index, 1);
    }
    this.setState({
      productsInCart,
    });
  };

  increaseItemCounter = (item) => {
    const productsInCart = [...this.state.productsInCart];
    item.amountInCart += 1;
    this.setState({
      productsInCart,
    });
  };

  getAllProducts = () => {
    client
      .query({
        query: gql`
          ${GET_ALL_PRODUCTS}
        `,
      })
      .then(({ data: { categories } }) => {
        const products = categories[0].products;
        this.setState({
          productsWithCategory: products,
        });
      });
  };
  getCurrinciesTypes = () => {
    client
      .query({
        query: gql`
          ${GET_ALL_CURRENCIES}
        `,
      })
      .then(({ data: { currencies } }) => {
        this.setState({
          currenciesTypes: currencies.map(
            ({ symbol, label }) => `${symbol} ${label}`
          ),
        });
      });
  };
  getIdClickedProductCard = (id) => {
    this.setState({ idProductCardClicked: id });
  };
  setCurrentCurrencyType = (val) => {
    this.setState({
      currentCurrensyType: val ? val : "$ USD",
    });
  };
  setCategoryName = (name) => {
    this.setState({ currentCategoryName: name });
  };
  setIsCartPageOpened = () => {
    this.setState({ isCartPageOpened: !this.state.isCartPageOpened });
  };

  componentDidMount() {
    this.getAllProducts();
    this.getCurrinciesTypes();
  }

  render() {
    const {
      currentCurrensyType,
      currenciesTypes,
      productsWithCategory,
      currentCategoryName,
      productsInCart,
      idProductCardClicked,
      totalPriceOfCart,
      isCartPageOpened,
    } = this.state;
    const {
      setCurrentCurrencyType,
      setCategoryName,
      addProductsToCart,
      getIdClickedProductCard,
      increaseItemCounter,
      decreaseItemCounter,
      setTotalPriceOfCart,
      addProdToCartWithDefAttrs,
      setIsCartPageOpened,
    } = this;

    return (
      <Container>
        <Navbar
          currenciesTypes={currenciesTypes}
          currentCurrensyType={currentCurrensyType}
          setCurrentCurrencyType={setCurrentCurrencyType}
          productsWithCategory={productsWithCategory}
          currentCategoryName={currentCategoryName}
          setCategoryName={setCategoryName}
          productsInCart={productsInCart}
          getIdClickedProductCard={getIdClickedProductCard}
          increaseItemCounter={increaseItemCounter}
          setTotalPriceOfCart={setTotalPriceOfCart}
          setIsCartPageOpened={setIsCartPageOpened}
        />
        <Routes>
          <Route
            path="/*"
            element={
              <CategoryPage
                currentCurrensyType={currentCurrensyType}
                productsWithCategory={productsWithCategory}
                currentCategoryName={currentCategoryName}
                productsInCart={productsInCart}
                addProductsToCart={addProductsToCart}
                idProductCardClicked={idProductCardClicked}
                getIdClickedProductCard={getIdClickedProductCard}
                increaseItemCounter={increaseItemCounter}
                setTotalPriceOfCart={setTotalPriceOfCart}
                addProdToCartWithDefAttrs={addProdToCartWithDefAttrs}
                setIsCartPageOpened={setIsCartPageOpened}
                isCartPageOpened={isCartPageOpened}
              />
            }
          />
          <Route
            path="/overlay"
            element={
              <CartMini
                currentCurrensyType={currentCurrensyType}
                productsWithCategory={productsWithCategory}
                currentCategoryName={currentCategoryName}
                productsInCart={productsInCart}
                addProductsToCart={addProductsToCart}
                idProductCardClicked={idProductCardClicked}
                getIdClickedProductCard={getIdClickedProductCard}
                increaseItemCounter={increaseItemCounter}
                decreaseItemCounter={decreaseItemCounter}
                totalPriceOfCart={totalPriceOfCart}
                setTotalPriceOfCart={setTotalPriceOfCart}
              />
            }
          />
          <Route
            path="/cartpage"
            element={
              <CartPage
                currentCurrensyType={currentCurrensyType}
                productsWithCategory={productsWithCategory}
                currentCategoryName={currentCategoryName}
                productsInCart={productsInCart}
                addProductsToCart={addProductsToCart}
                idProductCardClicked={idProductCardClicked}
                getIdClickedProductCard={getIdClickedProductCard}
                increaseItemCounter={increaseItemCounter}
                decreaseItemCounter={decreaseItemCounter}
                totalPriceOfCart={totalPriceOfCart}
                setTotalPriceOfCart={setTotalPriceOfCart}
                setIsCartPageOpened={setIsCartPageOpened}
              />
            }
          />
        </Routes>

        {/* <CategoryPage
          currentCurrensyType={currentCurrensyType}
          productsWithCategory={productsWithCategory}
          currentCategoryName={currentCategoryName}
          productsInCart={productsInCart}
          addProductsToCart={addProductsToCart}
          idProductCardClicked={idProductCardClicked}
          getIdClickedProductCard={getIdClickedProductCard}
          increaseItemCounter={increaseItemCounter}
          setTotalPriceOfCart={setTotalPriceOfCart}
          addProdToCartWithDefAttrs={addProdToCartWithDefAttrs}
          setIsCartPageOpened={setIsCartPageOpened}
          isCartPageOpened={isCartPageOpened}
        /> */}
      </Container>
    );
  }
}
