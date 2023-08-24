import { useRef, useState, useEffect } from "react";
import style from "./Header2.module.scss";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import productsCategory from "../../page/products/productsCategory";
import _ from "lodash";

// function xử lý trùng khớp query và mảng sản phẩm
function HandleSearchInfo(products, query) {
  let filteredProducts = products.filter((product) => {
    const lowerCaseQuery = _.deburr(
      query.toLowerCase().replace(/\s/g, "")
    );
    const lowerCaseName = _.deburr(
      product.name.toLowerCase().replace(/\s/g, "")
    );
    const lowerCaseCategory = _.deburr(
      product.category.toLowerCase().replace(/\s/g, "")
    );
    return (
      lowerCaseName.includes(lowerCaseQuery) ||
      lowerCaseCategory.includes(lowerCaseQuery)
    );
  });
  if (filteredProducts.length === 0) {
    return (filteredProducts = [
      {
        id: 1,
        name: "Không có kết quả tìm kiếm",
        category: "404 ERROR",
        price: "",
        description: "",
        image: require("../../assets/products/error404.png"),
        linkNotfound: null,
      },
    ]);
  } else {
    return filteredProducts;
  }
}

function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  // LỌC KQ TÌM KIẾM
  function handleInputChange(e) {
    setQuery(e.target.value);
    console.log(query);

    // lấy giá trị của VALUE render kết quả tìm kiếm
    const filteredProducts = HandleSearchInfo(
      productsCategory,
      e.target.value
    );
    setResults(filteredProducts);
  }

  // XÓA QUERY
  function deleteSearch() {
    setQuery("");
  }

  // XỬ LÝ KEYBOARD
  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      // Thực hiện hàm khi nhấn phím "Enter"
      console.log("đã enter", query);
      searchRef.current.value && handlerSearch();
    }
  }

  // CHUYỂN TRANG
  const handlerSearch = () => {
    query && navigate(`/products?search=${query}`);
    console.log(query);
    setQuery("");
  };

  const handleProductClick = (event) => {
    const productId =
      event.currentTarget.getAttribute("keyid");
    moveToProductPage(productId);
    event.stopPropagation(); // Ngăn chặn sự kiện click từ lan rộng ra các phần tử cha
    setQuery("");
  };
  function moveToProductPage(e) {
    console.log(e);
    query && navigate(`/products?search=${e}`);
    setQuery("");
  }

  // HÀM XỬ LÝ CLICK RA NGOÀI INPUT
  const handleOutsideClick = (event) => {
    if (
      // nhấn ra ngoài
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setShowResults(false);
    }
    if (
      // nhấn vào trong và có giá trị đang tìm kiếm
      inputRef.current &&
      inputRef.current.contains(event.target) &&
      searchRef.current.value
    ) {
      setShowResults(true);
    }
  };

  // THÊM SỰ KIỆN CLICK SẼ GỌI HÀM handleOutsideClick
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
  }, []);

  useEffect(() => {
    setShowResults(query !== "");
  }, [query]);

  //
  //
  //
  //
  return (
    <div className={clsx(style.searchBar)} ref={inputRef}>
      {/* SEARCH PART  */}
      <div className={clsx(style.searchPart)}>
        <input
          ref={searchRef}
          className={clsx(style.searchInput)}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
          placeholder="Tìm kiếm ..."
        />

        <button
          className={clsx(style.headerSearchIcon)}
          onClick={deleteSearch}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <button
          className={clsx(style.searchBtn)}
          onClick={handlerSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* RESULT PART  */}
      {showResults && (
        <div className={clsx(style.resultPart)}>
          {results.map((product) => {
            return (
              <Link
                className={clsx(style.productLink)}
                onClick={handleProductClick}
                keyid={product.id}
                to={`/products/${product.id}`}
              >
                {product.id}
                <img
                  className={clsx(style.productImg)}
                  alt="anh san pham"
                  src={product.image}
                />
                <div className={clsx(style.productInfo)}>
                  <div
                    className={clsx(style.productCategory)}
                  >
                    {product.category}
                  </div>
                  <div className={clsx(style.productName)}>
                    {product.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { SearchInput, HandleSearchInfo };
