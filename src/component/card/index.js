import clsx from "clsx";
import { Link } from "react-router-dom";

// props là một object có cấu trúc:
// {
//    id:
//    name: "string",
//    category: "string",
//    price: number,
//    description: "string"
//    carousel: [
//     imgs,
//    ],
//    details: {
//      address:
//        "string",
//      materials:
//        "string",
//      storage: "string",
//    },
//  }

function Card({ props, css }) {
  return (
    <div className={clsx(css.cardContainer)}>
      <Link
        className={clsx(css.Link)}
        to={`/products/${props.id}`}
      />
      <img
        className={clsx(css.cardImg)}
        alt="anh san pham"
        src={props.image}
      />
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
