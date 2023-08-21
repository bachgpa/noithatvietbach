import { useRef, useState } from "react";
// import style from "./Header.module.scss";
import style from "./Header2.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import productsCategory from "../../page/products/productsCategory";
import _ from "lodash";

// function xử lý trùng khớp query và mảng sản phẩm
function HandleSearchInfo(products, query) {
  console.log(query);
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
  console.log(filteredProducts);
  if (filteredProducts.length === 0) {
    console.log("none search result");
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
    console.log("ket quar else");
    return filteredProducts;
  }
}

// function SearchInput() {
//   const [query, setQuery] = useState("");
//   const [notFoundInfo, setNotFoundInfo] = useState("#");
//   const navigate = useNavigate();

//   const handlerSearch = () => {
//     query && navigate(`/products?search=${query}`);
//     // Thêm query parameter "search" và giá trị của query
//   };

//   const filteredProducts = HandleSearchInfo(
//     productsCategory,
//     query
//   );
//   const handleQueryChange = (e) => {
//     setQuery(e.target.value);
//     const filteredProducts = HandleSearchInfo(
//       productsCategory,
//       e.target.value
//     );
//     filteredProducts.linkNotfound
//       ? setNotFoundInfo(null)
//       : setNotFoundInfo("#");
//     return filteredProducts;
//   };
//   const deleteQuery = () => {
//     setQuery("");
//   };
//   console.log(notFoundInfo);
//   console.log(filteredProducts.linkNotfound);

//   return (
//     <div className={clsx(style.searchBar)}>
//       <div className={clsx(style.searchPart)}>
//         <input
//           className={clsx(style.searchInput)}
//           type="text"
//           value={query}
//           onChange={handleQueryChange}
//           placeholder="Tìm kiếm ..."
//         />
//         {query ? (
//           <button
//             className={clsx(style.headerSearchIcon)}
//             onClick={deleteQuery}
//           >
//             <FontAwesomeIcon icon={faCircleXmark} />
//           </button>
//         ) : (
//           <div></div>
//         )}
//         <button
//           className={clsx(style.searchBtn)}
//           onClick={handlerSearch}
//         >
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//         </button>
//       </div>

//       <div
//         className={clsx(style.resultPart, {
//           [style.show]: query,
//         })}
//       >
//         {filteredProducts.map((product, index) => {
//           return (
//             <div
//               className={clsx(style.productLink, {
//                 [style.linkNotfound]: notFoundInfo,
//               })}
//             >
//               <img
//                 className={clsx(style.productImg)}
//                 alt="anh san pham"
//                 src={product.image}
//               />
//               <div
//                 key={index}
//                 className={clsx(style.productInfo)}
//               >
//                 <div
//                   className={clsx(style.productCategory)}
//                 >
//                   {product.category}
//                 </div>
//                 <div className={clsx(style.productName)}>
//                   {product.name}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

function SearchInput() {
  // khởi tạo trạng thái cần lưu trữ
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  //khởi tạo chuyển hướng trang
  const navigate = useNavigate();
  // const history = useHistory();

  const searchRef = useRef(null);

  // xử lý sự kiện
  function handleInputChange(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setShowResults(true);
    setSearchError(false);
    // lấy giá trị của query render kết quả tìm kiếm
    const filteredProducts = productsCategory.filter(
      (product) => {
        const lowerCaseQuery = _.deburr(
          newQuery.toLowerCase().replace(/\s/g, "")
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
      }
    );
    console.log(filteredProducts);
    return filteredProducts;
  }

  function deleteSearch() {
    setQuery("");
    setShowResults(false);
  }

  const handlerSearch = () => {
    query && navigate(`/products?search=${query}`);
    // Thêm query parameter "search" và giá trị của query
  };

  return (
    <div className={clsx(style.searchBar)}>
      <div className={clsx(style.searchPart)}>
        <input
          className={clsx(style.searchInput)}
          type="text"
          value={query}
          onChange={handleInputChange}
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

      <div className={clsx(style.resultPart)}>
        resultPart
      </div>
    </div>
  );
}

export { SearchInput, HandleSearchInfo };
