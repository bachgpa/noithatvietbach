import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../button";
import style from "./card.module.scss";
import React, { useContext } from "react";
import { CardContext } from "../../App";

function Card({ props, css }) {
  // const { selectedCard } = useContext(CardContext);
  const { setSelectedCard } = useContext(CardContext);
  // console.log("Cardcomponent, props:", props);
  // console.log(
  //   "Cardcomponent, setSelectedCard:",
  //   setSelectedCard
  // );
  // console.log("cardcomponent, selectedCard:", selectedCard);
  // const cardBtnRef = useRef(null);
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCard(props);
  }
  return (
    <div
      className={clsx(
        css.cardContainer,
        style.cardContainer1
      )}
    >
      <Link
        to={`/products/${props.id}`}
        className={clsx(style.imgContainer)}
      >
        <img
          className={clsx(css.cardImg)}
          alt="anh san pham"
          src={props.image}
        />
        <div className={clsx(style.btnCardContainer)}>
          <Button
            Children={"Xem nhanh"}
            // ref={cardBtnRef}
            // Tag={Link}
            Type={"primary"}
            Size={"medium"}
            className={clsx(style.BtnCard)}
            onClick={handleClick}
          />
        </div>
      </Link>
      <div className={clsx(css.cardInfo)}>
        <div className={clsx(css.cardCategory)}>
          {props.category}
        </div>
        <div className={clsx(css.cardName)}>
          {props.name}
        </div>
        <div className={clsx(css.cardPrice)}>
          {props.price}
        </div>
      </div>
    </div>
  );
}

export default Card;
