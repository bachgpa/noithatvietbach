import clsx from "clsx";

// import style from "./Header.module.scss";
import style from "./Header2.module.scss";

function Dropdown({ submenus }) {
  return (
    <ul className={clsx(style.submenuList)}>
      {submenus.map((submenuItem) => {
        return (
          <li className={clsx(style.submenuItem)}>
            <a
              href={submenuItem.url}
              className={clsx(style.submenuItemLink)}
            >
              {submenuItem.engTitle}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
