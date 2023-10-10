import clsx from "clsx";
import style from "./categorySmall.module.scss";
import { useEffect } from "react";
import Card from "../card";
import Button from "../button";
import productsCategory from "../../page/products/productsCategory";
import { useState } from "react";

//đang gặp lỗi không render được
//smallCategory trong productDetail

function CategorySmall({ category }) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let a = (page - 1) * 10;
    let b = a + 10;
    // gán biến newpage = mảng prdctgr đã lọc ra những sp
    // cùng category trong thứ tự từ a đến b
    let newPage = productsCategory
      .filter((x) => x.category === category)
      .slice(a, b);
    setProducts([...products, ...newPage]);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [page]);
  return (
    // single category
    <div className={clsx(style.singleCategory)}>
      <div className={clsx(style.categoryName)}>
        ----- {category} -----
      </div>
      <div className={clsx(style.categoryList)}>
        {
          //  map qua danh sách sản phẩm có danh mục
          //  trùng với danh mục hiện có
          products.map((product) => {
            return (
              <Card
                props={product}
                css={style}
                key={product.id}
              />
            );
          })
        }
      </div>
      <div className={clsx(style.buttonContainer)}>
        <Button
          // Tag={"button"}
          Type={"primary borrad"}
          Size={"medium"}
          ClassForBtn={"btnCategory"}
          Children={"XEM THÊM"}
          onClick={() => {
            setPage(page + 1);
          }}
        ></Button>
      </div>
    </div>
  );
}

export default CategorySmall;
