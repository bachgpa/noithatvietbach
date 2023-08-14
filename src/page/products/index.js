import { useLocation } from "react-router-dom";
import clsx from "clsx";
import style from "./productsCatedory.module.scss";
import productsCategory from "./productsCategory";

function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search"); // Lấy giá trị của query parameter "search"
  console.log(searchQuery);

  const filteredProducts = productsCategory.filter(
    (product) => {
      const a = searchQuery || "";
      return product.name
        .toLowerCase()
        .includes(a.toLocaleLowerCase());
    }
  );
  console.log(filteredProducts);

  return (
    <div className={clsx(style.productsCategory)}>
      {filteredProducts.map((product) => {
        return (
          <div className={clsx(style.productItem)}>
            <img
              className={clsx(style.productImg)}
              alt="anh san pham"
              src={product.image}
            />
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
          </div>
        );
      })}
    </div>
  );
}

export default Products;
