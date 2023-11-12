import clsx from "clsx";

import style from "./Header2.module.scss";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { CardContext } from "../../App";

function Header() {
  let { toggleSidebar } = useContext(CardContext);
  let { setToggleSidebar } = useContext(CardContext);
  const headerRef = useRef(null);
  const coverRef = useRef(null);
  const logoRef = useRef(null);
  function handleToggleSidebar(e) {
    if (e.target === coverRef.current) {
      setToggleSidebar(false);
    }
    if (e.target === logoRef.current) {
      setToggleSidebar(false);
    }
    if (logoRef.current.contains(e.target)) {
      setToggleSidebar(false);
    }
  }
  return (
    <div
      className={clsx(style.Header, {
        [style.active]: toggleSidebar,
      })}
      ref={headerRef}
      onClick={handleToggleSidebar}
    >
      <div className={clsx(style.topHeader)}>
        <Link
          to="/noithatvietbach"
          className={clsx(style.headerLogoContain)}
          ref={logoRef}
        >
          <div className={clsx(style.headerLogo)}></div>
        </Link>
        <NavBar />
      </div>
      <div
        className={clsx(style.coverPart)}
        ref={coverRef}
      ></div>
    </div>
  );
}

export default Header;
