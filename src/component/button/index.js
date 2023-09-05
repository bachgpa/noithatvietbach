import clsx from "clsx";
import style from "./button.module.scss";
import style2 from "../cart/cart.module.scss";

function Button({
  Tag,
  Type,
  Size,
  Classes,
  Children,
  ...passProps
}) {
  let Comp = Tag;

  return (
    <Comp
      {...passProps}
      className={clsx(
        style.Btn,
        style[Type],
        style[Size],
        style2[Classes]
      )}
    >
      {Children}
    </Comp>
  );
}

export default Button;
