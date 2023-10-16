import clsx from "clsx";

// import style from "./Header.module.scss";
import style from "./Header2.module.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Dropdown({ submenus }) {
  const dropRef = useRef(null);
  return (
    <ul className={clsx(style.submenuList)}>
      {submenus.map((submenuItem) => {
        return (
          <li className={clsx(style.submenuItem)}>
            <Link
              to={`/products?search=${submenuItem.category}`}
              ref={dropRef}
              className={clsx(style.submenuItemLink)}
            >
              {submenuItem.engTitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
