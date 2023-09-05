import clsx from "clsx";
import style from "./category.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryContext } from "../../App";
import { useContext } from "react";
import Card from "../card";
import Button from "../button";

function Category() {
  const products = useContext(categoryContext);
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(categories);
  console.log("crs", style);

  return (
    //categories container
    <div className={clsx(style.HomeCategory)}>
      {/* Lấy từng danh mục qua categories */}
      {categories.map((categoryItem, index) => {
        return (
          // single category
          <div
            className={clsx(style.singleCategory)}
            key={index}
          >
            <div className={clsx(style.categoryName)}>
              ----- {categoryItem} -----
            </div>
            <div className={clsx(style.categoryList)}>
              {
                //  map qua danh sách sản phẩm có danh mục trùng với danh mục hiện có
                products.map((product, index) => {
                  return (
                    product.category === categoryItem &&
                    index < 24 && (
                      <Card
                        props={product}
                        css={style}
                        key={product.id}
                      />
                    )
                  );
                })
              }
            </div>
            <Button
              Tag={"button"}
              Type={"primary"}
              Size={"medium"}
              Classes={"watchmore"}
              Children={"XEM THÊM"}
            ></Button>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
