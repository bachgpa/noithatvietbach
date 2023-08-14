import { useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handlerSearch = () => {
    query
      ? navigate(`/products?search=${query}`)
      : console.log("chua nhap tim kiem"); // Thêm query parameter "search" và giá trị của query
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    // console.log(query);
  };
  return (
    <div className={clsx(style.searchBar)}>
      <div className={clsx(style.searchPart)}>
        <input
          className={clsx(style.searchInput)}
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Tìm kiếm ..."
        />
        <button
          className={clsx(style.searchBtn)}
          onClick={handlerSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={clsx(style.resultPart)}></div>
    </div>
  );
}

export default SearchInput;
