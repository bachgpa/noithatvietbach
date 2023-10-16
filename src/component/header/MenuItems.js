import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

// import style from "./Header.module.scss";
import style from "./Header2.module.scss";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  let refMenuItems = useRef();

  // nhấn ra ngoài thì tất dropdown
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
            <FontAwesomeIcon
              className={clsx(style.headerIcon)}
              icon={items.icon}
            />
            <div className={clsx(style.headerOptionText)}>
              {items.engTitle}
            </div>
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
        <Link
          className={clsx(style.headerOptionLink)}
          to={items.url}
        >
          <FontAwesomeIcon
            className={clsx(style.headerIcon)}
            icon={items.icon}
          />
          {items.engTitle}
        </Link>
      )}
    </div>
  );
}

export default MenuItems;
