import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import style from "./Header.module.scss";
import Dropdown from "./Dropdown";
import { useState } from "react";

function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(true);

  return (
    <div className={clsx(style.headerOption)}>
      {items.submenu ? (
        <>
          {/* case có submenu */}
          <button
            className={clsx(style.headerOptionLink)}
            // aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            {items.engTitle}
            <FontAwesomeIcon
              className={clsx(style.headerIcon)}
              icon={faCaretDown}
            />
          </button>
          {dropdown && (
            <Dropdown
              dropdown={dropdown}
              submenus={items.submenu}
            />
          )}
        </>
      ) : (
        // không có submenu
        <a
          className={clsx(style.headerOptionLink)}
          href={items.url}
        >
          {items.engTitle}
        </a>
      )}
    </div>
  );
}

export default MenuItems;
