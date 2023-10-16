import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { HandleSearchInfo } from "../../component/header/SearchInput";
import { useContext, useEffect, useState } from "react";

import { categoryContext } from "../../App";
import style from "./productsCatedory.module.scss";
import Card from "../../component/card";
import FloatInfo from "../../component/floatInfo";

// function hiển thị kết quả tìm kiếm, được export ra ngoài để dùng

function Products() {
  const productsCategory = useContext(categoryContext);
  // Lấy giá trị của query parameter "search"
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState("");
  const takeQuery = searchParams.get("search");

  // gán lại giá trị cho searchQuery mỗi lẫn render
  useEffect(() => {
    setSearchQuery(takeQuery);
  }, [takeQuery]);

  // lọc các sản phẳm với list sp và từ khóa tìm kiếm
  const filteredProducts = HandleSearchInfo(
    productsCategory,
    searchQuery || ""
  );

  //render kết quả tìm kiếm từ search bar
  return (
    <div className={clsx(style.productsCategory)}>
      <div
        className={clsx(style.searchNoti)}
      >{`Kết quả tìm kiếm cho "${searchQuery}"`}</div>
      {/*  */}
      <div className={clsx(style.cardsContainer)}>
        {filteredProducts.map((product) => {
          return <Card props={product} css={style} />;
        })}
      </div>
      <FloatInfo />
    </div>
  );
}

export default Products;
