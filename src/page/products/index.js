import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import style from "./productsCatedory.module.scss";
import productsCategory from "./productsCategory";
import { HandleSearchInfo } from "../../component/header/SearchInput";
import { useEffect, useState } from "react";

// function hiển thị kết quả tìm kiếm, được export ra ngoài để dùng

function Products() {
  // Lấy giá trị của query parameter "search"
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState("");

  const takeQuery = searchParams.get("search");
  // gán lại giá trị cho searchQuery mỗi lẫn render
  useEffect(() => {
    setSearchQuery(takeQuery);
  }, [takeQuery]);
  const filteredProducts = HandleSearchInfo(
    productsCategory,
    searchQuery || ""
  );
  function handleProductClick() {
    setSearchQuery("");
  }
  console.log(filteredProducts);
  return (
    <div className={clsx(style.productsCategory)}>
      <div
        className={clsx(style.searchNoti)}
      >{`kết quả tìm kiếm cho "${searchQuery}"`}</div>
      <div className={clsx(style.productsContainer)}>
        {filteredProducts.map((product) => {
          return (
            <Link
              className={clsx(style.productItem)}
              to={`/products/${product.id}`}
              onClick={handleProductClick}
            >
              <img
                className={clsx(style.productImg)}
                alt="anh san pham"
                src={product.image}
              />
              {console.log(product.image)}
              <div className={clsx(style.productDetail)}>
                <div className={clsx(style.productTitle)}>
                  <div className={clsx(style.productName)}>
                    {product.name}
                  </div>
                  <div className={clsx(style.productDes)}>
                    {product.description}
                  </div>
                </div>
                <div className={clsx(style.productPrice)}>
                  {product.price}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
