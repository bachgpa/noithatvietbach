import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import style from "./productsCatedory.module.scss";
import productsCategory from "../products/productsCategory";
import { HandleSearchInfo } from "../../component/header/SearchInput";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { parseInt } from "lodash";

function ProductsDetail() {
  const { productsId } = useParams();

  //Get product
  const [currentProduct] = productsCategory.filter(
    (product) => {
      parseInt(product.id) === parseInt(productsId)
        ? console.log("yes")
        : console.log("no");
      return parseInt(product.id) === parseInt(productsId);
    }
  );
  console.log(currentProduct.id);

  // render sản phẩm
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.productImgShow)}>
        <img
          className={clsx(style.productImg)}
          alt="anh san pham"
          src={currentProduct.image}
        />
        <div className={clsx(style.productCarousel)}>
          {currentProduct.carousel.map((img) => {
            return (
              <img
                className={clsx(style.carouselImg)}
                alt="anh san pham"
                src={img}
              />
            );
          })}
        </div>
      </div>
      <div className={clsx(style.productInfo)}>
        <div className={clsx(style.productName)}>
          {currentProduct.name}
        </div>
        <div className={clsx(style.productPrice)}>
          {currentProduct.price}
        </div>
        <div className={clsx(style.productDescription)}>
          {currentProduct.description}
        </div>
        <div className={clsx(style.productNumber)}>
          Có sẵn {currentProduct.number}
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
