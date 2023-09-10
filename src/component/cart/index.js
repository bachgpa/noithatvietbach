import clsx from "clsx";
import style from "./cart.module.scss";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CartBtn() {
  const [active, setActive] = useState(false);
  // const cartRef = useRef(null);

  function onMouseEnter() {
    setActive(true);
    console.log("enter");
  }
  function onMouseLeave() {
    setActive(false);
    console.log("leave");
  }
  return (
    <div
      className={clsx(style.cartDisplay)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // ref={cartRef}
    >
      <Button
        Tag={"button"}
        Type={"primary borrad"}
        Size={"medium"}
        Classes={"cartBtn"}
        Children={
          <>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{/* {cartNumber} */}1</p>
          </>
        }
        className={clsx(style.cartBtn)}
      ></Button>
      <div
        className={clsx(
          style.cartContain,
          {
            [style.active]: active,
          }
          // style.active
        )}
      >
        noi dung cua cart contain noi dung cua cart
        containnoi dung cua cart containnoi dung cua cart
        containnoi dung cua cart containnoi dung cua cart
        containnoi dung cua cart containnoi dung cua cart
        contain
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
