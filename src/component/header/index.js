import clsx from "clsx";

import style from "./Header2.module.scss";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className={clsx(style.Header)}>
      <div className={clsx(style.topHeader)}>
        <a
          href="/"
          className={clsx(style.headerLogoContain)}
        >
          <div className={clsx(style.headerLogo)}></div>
        </a>
        <NavBar />
        {/* <SearchInput /> */}
      </div>
    </div>
  );
}

export default Header;
