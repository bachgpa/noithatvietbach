import clsx from "clsx";
import style1 from "./button.module.scss";
import style2 from "../cart/cart.module.scss";

function Button({
  Tag,
  Type = "",
  Size,
  Classes,
  ClassForBtn,
  Children,
  ...passProps
}) {
  let Comp = Tag || "button";
  const typeList = Type.split(" ");

  return (
    <Comp
      {...passProps}
      className={clsx(
        style1.Btn,
        typeList.map((type) => style1[type]),
        style1[Size],
        style2[Classes]
      )}
    >
      {Children}
    </Comp>
  );
}

export default Button;
