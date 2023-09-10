import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../button";
import style from "./card.module.scss";
import React from "react";

//2 state, 1 cái bật Float,
// 1 cái truyền dữ liệu cho Float

export const CardInfoContext = React.createContext();

function Card({ props, css }) {
  // export const cardContext = props;
  console.log(props);
  return (
    <div
      className={clsx(
        css.cardContainer,
        style.cardContainer1
      )}
    >
      <Link
        className={clsx(css.Link)}
        to={`/products/${props.id}`}
      />
      <div className={clsx(style.imgContainer)}>
        <img
          className={clsx(css.cardImg)}
          alt="anh san pham"
          src={props.image}
        ></img>
        <div className={clsx(style.btnCardContainer)}>
          <Button
            Tag={"Link"}
            Type={"primary"}
            Size={"medium"}
            Children={"Xem nhanh"}
            className={clsx(style.BtnCard)}
          ></Button>
        </div>
      </div>
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
