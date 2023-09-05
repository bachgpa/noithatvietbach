import clsx from "clsx";
import style from "./productsCatedory.module.scss";
import productsCategory from "../products/productsCategory";
import React from "react";
import { useParams } from "react-router-dom";
import { parseInt } from "lodash";
import Carousel from "../../component/productCarousel";

function ProductsCategory() {
  const { productsId } = useParams();

  //Get product
  const [currentProduct] = productsCategory.filter(
    (product) => {
      return parseInt(product.id) === parseInt(productsId);
    }
  );
  console.log(currentProduct.id);

  // render sản phẩm
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.productImgShow)}>
        <div className={clsx(style.productCarousel)}>
          <Carousel items={currentProduct.carousel} />
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

export default ProductsCategory;
