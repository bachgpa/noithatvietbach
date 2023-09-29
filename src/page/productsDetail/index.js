import clsx from "clsx";
import style from "./productsCatedory.module.scss";
import productsCategory from "../products/productsCategory";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { parseInt } from "lodash";
import Carousel from "../../component/productCarousel";
import AddToCartBtn from "../../component/addToCartBtn";

function ProductsDetail() {
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
        {/* name */}
        <div className={clsx(style.productName)}>
          {currentProduct.name}
        </div>
        {/* box info */}
        <div className={clsx(style.InfoBox)}>
          <div className={clsx(style.productPrice)}>
            {currentProduct.price}
          </div>
          {/* <div className={clsx(style.productDescription)}>
            {currentProduct.description}
          </div>
          <div className={clsx(style.productNumber)}>
            Có sẵn {currentProduct.number}
          </div> */}
          <div className={clsx(style.infoTable)}>
            <div
              className={clsx(
                style.infoInsurance,
                style.infoTitle
              )}
            >
              <h4>Bảo hành</h4>
              <div className={clsx(style.infoDetail)}>
                12 tháng kể từ ngày nhận hàng
              </div>
            </div>
            <div
              className={clsx(
                style.infoColor,
                style.infoTitle
              )}
            >
              <h4>Màu sắc</h4>
              <div className={clsx(style.infoDetail)}>
                {currentProduct.color.map((color) => {
                  return (
                    <div
                      className={clsx(
                        style.colorOfProduct,
                        style.infoOptions
                      )}
                    >
                      {color}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={clsx(
                style.infoSize,
                style.infoTitle
              )}
            >
              <h4>Size</h4>
              <div
                className={clsx(
                  style.infoDetail,
                  style.infoSizeDetail
                )}
              >
                {currentProduct.size.map((size, index) => {
                  return (
                    <div
                      tag={index}
                      className={clsx(
                        style.sizeOfProduct,
                        style.infoOptions
                      )}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={clsx(
                style.infoButton,
                style.infoTitle
              )}
            >
              <div className={clsx(style.infoDetail)}>
                <AddToCartBtn cardItem={currentProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
