import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ProductCard from "./ProductCard";
import { Container, CategoryContainer, CategoryName } from "./ProductsStyle";
import ProductPage from "./ProductPage";

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**================================================= */

  render() {
    const {
      productsWithCategory,
      currentCurrensyType,
      currentCategoryName,
      productsInCart,
      addProductsToCart,
      getIdClickedProductCard,
      idProductCardClicked,
      setTotalPriceOfCart,
      addProdToCartWithDefAttrs,
    } = this.props;

    return (
      <div key={uuidv4()}>
        <CategoryContainer>
          <CategoryName>
            {currentCategoryName ? currentCategoryName.toUpperCase() : `ALL`}
          </CategoryName>
        </CategoryContainer>
        {!idProductCardClicked && (
          <Container>
            {!currentCategoryName
              ? productsWithCategory.map((item) => {
                  return (
                    <ProductCard
                      key={item.id}
                      product={item}
                      currentCurrensyType={currentCurrensyType}
                      getIdClickedProductCard={getIdClickedProductCard}
                      idProductCardClicked={idProductCardClicked}
                      productsWithCategory={productsWithCategory}
                      productsInCart={productsInCart}
                      addProductsToCart={addProductsToCart}
                      addProdToCartWithDefAttrs={addProdToCartWithDefAttrs}
                    />
                  );
                })
              : productsWithCategory
                  .filter((item) => item.category === currentCategoryName)
                  .map((item) => {
                    return (
                      <ProductCard
                        key={item.id}
                        product={item}
                        currentCurrensyType={currentCurrensyType}
                        getIdClickedProductCard={getIdClickedProductCard}
                        idProductCardClicked={idProductCardClicked}
                        productsWithCategory={productsWithCategory}
                        productsInCart={productsInCart}
                        addProductsToCart={addProductsToCart}
                        addProdToCartWithDefAttrs={addProdToCartWithDefAttrs}
                      />
                    );
                  })}
          </Container>
        )}

        {idProductCardClicked &&
          productsWithCategory.map((product) => {
            if (product.id === idProductCardClicked) {
              return (
                <Routes key={uuidv4()}>
                  <Route
                    path="productpage"
                    element={
                      <ProductPage
                        productCardClicked={product}
                        currentCurrensyType={currentCurrensyType}
                        productsInCart={productsInCart}
                        productsWithCategory={productsWithCategory}
                        addProductsToCart={addProductsToCart}
                        getIdClickedProductCard={getIdClickedProductCard}
                        idProductCardClicked={idProductCardClicked}
                        setTotalPriceOfCart={setTotalPriceOfCart}
                      />
                    }
                  />
                </Routes>
              );
            }
          })}
      </div>
    );
  }
}
