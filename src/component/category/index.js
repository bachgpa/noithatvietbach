import clsx from "clsx";
import style from "./category.module.scss";
import { categoryContext } from "../../App";
import { createContext, useContext } from "react";
import CategorySmall from "../categorysmall";

export const styleContext = createContext();

function Category() {
  const products = useContext(categoryContext);
  // giải nén categories thành một mảng, trong đó các phần
  // từ lấy category của products là duy nhất
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    //categories container
    <div className={clsx(style.HomeCategory)}>
      {/* Lấy từng danh mục qua categories */}
      {categories.map((categoryItem, index) => {
        return (
          <CategorySmall
            category={categoryItem}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Category;
