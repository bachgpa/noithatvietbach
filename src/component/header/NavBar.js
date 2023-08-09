import clsx from "clsx";
import style from "./Header.module.scss";
import { MenuItemlist } from "./MenuItemList";
import MenuItems from "./MenuItems";

function NavBar() {
  return (
    <div className={clsx(style.headerOptions)}>
      {MenuItemlist.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
      })}
      {/* {MenuItemlist.map((menu, index) => {
        return (
          <div className={clsx(style.headerOption)}>
        
            <a href={menu.url} className={clsx(style.headerOptionLink)}>
              {menu.engTitle}
            </a>
          </div>
        );
      })} */}
    </div>
  );
}

export default NavBar;
