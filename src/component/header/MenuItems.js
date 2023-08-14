import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import style from "./Header.module.scss";
import Dropdown from "./Dropdown";

function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  let refMenuItems = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        refMenuItems.current &&
        !refMenuItems.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  return (
    <div
      className={clsx(style.headerOption)}
      ref={refMenuItems}
    >
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
