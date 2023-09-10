import clsx from "clsx";

import style from "./Header2.module.scss";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={clsx(style.Header)}>
      <div className={clsx(style.topHeader)}>
        <Link
          to="/"
          className={clsx(style.headerLogoContain)}
        >
          <div className={clsx(style.headerLogo)}></div>
        </Link>
        <NavBar />
        {/* <SearchInput /> */}
      </div>
    </div>
  );
}

export default Header;
