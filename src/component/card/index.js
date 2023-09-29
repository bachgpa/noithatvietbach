import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../button";
import style from "./card.module.scss";
import React, { useContext, useRef } from "react";
import { CardContext } from "../../page/home";

function Card({ props, css }) {
  const cardBtnRef = useRef(null);
  // distructuring de lay ra setSelectedCard
  const { setSelectedCard } = useContext(CardContext);

  function handleClick(e) {
    e.preventDefault();
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
        ></img>
        <div className={clsx(style.btnCardContainer)}>
          <Button
            Children={"Xem nhanh"}
            ref={cardBtnRef}
            Tag={"Link"}
            Type={"primary"}
            Size={"medium"}
            className={clsx(style.BtnCard)}
            onClick={handleClick}
          ></Button>
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
