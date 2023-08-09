import clsx from "clsx";

import style from "./Header.module.scss";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className={clsx(style.Header)}>
      <div className={clsx(style.topHeader)}>
        <a href="/" className={clsx(style.headerLogo)}></a>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
