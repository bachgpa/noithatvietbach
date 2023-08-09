import clsx from "clsx";

import style from "./Header.module.scss";
import MenuItems from "./MenuItems";

function Dropdown({ submenus }) {
  return (
    <ul className={clsx(style.submenuList)}>
      {submenus.map((submenuItem, index) => {
        return (
          <li className={clsx(style.submenuItem)}>
            <a
              href={submenuItem.url}
              className={clsx(style.submenuItemLink)}
            >
              {submenuItem.engTitle}
            </a>
          </li>

          //  <MenuItems items={submenus} key={index} />
        );
      })}
    </ul>
  );
}

export default Dropdown;
