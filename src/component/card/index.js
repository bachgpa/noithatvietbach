import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../button";
import style from "./card.module.scss";
import React, { useContext } from "react";
import { CardContext } from "../../App";

function Card({ props, css }) {
  const { setSelectedCard } = useContext(CardContext);
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
          {/* {props.price} */}
          {props.price.toLocaleString("en-US", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
