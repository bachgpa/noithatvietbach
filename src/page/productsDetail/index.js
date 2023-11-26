import clsx from "clsx";
import style from "./productsDetail.module.scss";
import productsCategory from "../products/productsCategory";
import React from "react";
import { useParams } from "react-router-dom";
import { parseInt } from "lodash";
import Carousel from "../../component/productCarousel";
import AddToCartBtn from "../../component/addToCartBtn";
import CategorySmall from "../../component/categorysmall";
import FloatInfo from "../../component/floatInfo";

function ProductsDetail() {
  // lấy id bằng param
  const { productsId } = useParams();

  //Get product có id === id lấy qua param
  const [currentProduct] = productsCategory.filter(
    (product) => {
      return parseInt(product.id) === parseInt(productsId);
    }
  );
  // console.log(currentProduct.details.from);

  // render sản phẩm
  return (
    <div className={clsx(style.container)}>
      <FloatInfo />
      <div className={clsx(style.orderPart)}>
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
              {currentProduct.price.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "VND",
                }
              )}
            </div>

            <div className={clsx(style.infoTable)}>
              <div
                className={clsx(
                  style.infoButton,
                  style.infoTitle
                )}
              >
                <div className={clsx(style.infoDetail)}>
                  <AddToCartBtn
                    cardItem={currentProduct}
                    numSelect={true}
                    typeBtn={"add"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(style.detailPart, style.mainPart)}
      >
        <h4 className={clsx(style.detailTitle)}>
          CHI TIẾT SẢN PHẨM
        </h4>
        {/* {currentProduct.details} */}
        <div className={clsx(style.detailInfo)}>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.brand
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Thương hiệu:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.brand}
            </span>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.insuarrance
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Bảo hành:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.insuarrance}
            </span>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.insuarranceDate
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Thời hạn bảo hành:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.insuarranceDate}
            </span>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.storage
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Kho hàng:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.storage}
            </span>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.address
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Địa chỉ:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.address}
            </span>
          </div>
        </div>
      </div>
      {/* MO TẢ SẢN PHẨM */}
      <div
        className={clsx(style.commentlPart, style.mainPart)}
      >
        <h4 className={clsx(style.detailTitle)}>
          Mô TẢ SẢN PHẨM
        </h4>
        <div className={clsx(style.detailInfo)}>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.materials
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Chất liệu:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.materials}
            </span>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.size
            )}
          >
            <div className={clsx(style.detailInfoTitle)}>
              Kích cỡ:
            </div>
            <div className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.size}
            </div>
          </div>
          <div
            className={clsx(
              style.detailInfoContainer,
              style.sendFrom
            )}
          >
            <span className={clsx(style.detailInfoTitle)}>
              Gửi từ:
            </span>
            <span className={clsx(style.detailInfoDesc)}>
              {currentProduct.details.sendFrom}
            </span>
          </div>
        </div>
      </div>
      <div
        className={clsx(style.suggestlPart, style.mainPart)}
      >
        <h4 className={clsx(style.detailTitle)}>
          SẢN PHẨM KHÁC
        </h4>
        <CategorySmall category={currentProduct.category} />
      </div>
    </div>
  );
}

export default ProductsDetail;
