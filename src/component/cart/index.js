import clsx from "clsx";
import style from "./cart.module.scss";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CartBtn() {
  const [active, setActive] = useState(false);
  function setTrue() {
    setActive(true);
  }
  function setFalse() {
    setActive(false);
  }

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // console.log(cartItems);
  const [cartNumber, setCartNumber] = useState(0);
  var filteredCartItems = [...cartItems].reverse();
  // var filteredCartItems = handleCartItems(cartItems).reverse();

  useEffect(() => {
    const handleStorageChange = () => {
      const reGetCartItems = JSON.parse(
        localStorage.getItem("cartItems")
      );
      var num;
      if (reGetCartItems) {
        num = reGetCartItems.reduce((sum, item) => {
          sum += item.quantity;
          return sum;
        }, 0);
      } else {
        num = 0;
      }
      if (num !== cartNumber) {
        setCartNumber(num);
        setCartItems(
          JSON.parse(localStorage.getItem("cartItems"))
        );
      }
      // console.log("clicked at cart component");
    };
    handleStorageChange();
    document.addEventListener("click", handleStorageChange);
    return () => {
      document.removeEventListener(
        "click",
        handleStorageChange
      );
    };
  }, [cartNumber, cartItems]);

  // function handleCartItems(cartItems) {
  //   return cartItems.reduce((result, item) => {
  //     const existingItem = result.find(
  //       (i) => i.idClassified === item.idClassified
  //     );

  //     if (existingItem) {
  //       existingItem.quantity += 1;
  //     } else {
  //       result.push({ ...item, quantity: 1 });
  //     }

  //     return result;
  //   }, []);
  // }

  return (
    <div
      className={clsx(style.cartDisplay)}
      onMouseEnter={setTrue}
      onMouseLeave={setFalse}
    >
      <Link
        to={"/cart"}
        className={clsx(style.linkBtnToCart)}
      >
        <Button
          key={"éo hiểu"}
          Tag={"button"}
          Type={"primary borrad"}
          Size={"medium"}
          Classes={"cartBtn"}
          Children={
            <>
              <FontAwesomeIcon icon={faCartShopping} />
              <p>{cartNumber}</p>
            </>
          }
          className={clsx(style.cartBtn)}
        ></Button>
      </Link>
      <div
        className={clsx(style.cartContain, {
          [style.active]: active,
        })}
      >
        {filteredCartItems.map(function (cartItem, index) {
          if (index < 5) {
            return (
              <div
                key={index}
                className={clsx(style.cartContainer)}
              >
                <Link
                  to={`/products/${cartItem.id}`}
                  onClick={setFalse}
                  className={clsx(style.cartPart)}
                >
                  <img
                    className={clsx(style.cartItemImg)}
                    alt="cart Img"
                    src={cartItem.image}
                  />
                  <div
                    className={clsx(
                      style.cartInfoContainer
                    )}
                  >
                    <div className={clsx(style.cartName)}>
                      {cartItem.name}
                    </div>
                    <div
                      className={clsx(style.cartQuantity)}
                    >
                      x{cartItem.quantity}
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
          return null;
        })}
        <div
          onClick={setFalse}
          className={clsx(style.buttonPart)}
        >
          <p>{cartNumber} sản phẩm trong giỏ hàng</p>
          <Link
            key={"ủa alo"}
            className={clsx(style.linkToCart)}
            to={"/cart"}
          >
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div onmo className={clsx(style.HomeCarousel)}>
      this is Cart of product
    </div>
  );
}

export default Cart;
export { CartBtn };
