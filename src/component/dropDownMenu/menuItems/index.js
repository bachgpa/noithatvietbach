import { MenuItemsList } from "./MenuItemsList.js";
import clsx from "clsx";

function MenuItems() {
  return (
    <>
      {MenuItemsList.map((menuItem, index) => {
        return (
          <div className={clsx(menuItem.class)} key={index}>
            {" "}
            this is menu {index + 1}
          </div>
        );
      })}
      {console.log(MenuItemsList)}
    </>
  );
}

export default MenuItems;
