import clsx from "clsx";
import style1 from "./button.module.scss";
import style2 from "../cart/cart.module.scss";

function Button({
  Tag,
  Type,
  Size,
  Classes,
  ClassForBtn,
  Children,
  ...passProps
}) {
  console.log(passProps);
  let Comp = Tag || "button";

  return (
    <Comp
      {...passProps}
      className={clsx(
        style1.Btn,
        style1[Type],
        style1[Size],
        style2[Classes]
        // classReceive[ClassForBtn]
      )}
    >
      {Children}
    </Comp>
  );
}

export default Button;
