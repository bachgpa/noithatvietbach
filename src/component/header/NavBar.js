import clsx from "clsx";
// import style from "./Header.module.scss";
import style from "./Header2.module.scss";
import { MenuItemlist } from "./MenuItemList";
import MenuItems from "./MenuItems";

function NavBar() {
  return (
    <div className={clsx(style.headerOptions)}>
      {MenuItemlist.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
      })}
    </div>
  );
}

export default NavBar;
