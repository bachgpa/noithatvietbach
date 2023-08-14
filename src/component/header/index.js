import clsx from "clsx";

import style from "./Header.module.scss";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className={clsx(style.Header)}>
      <div className={clsx(style.topHeader)}>
        <a href="/">
          <div className={clsx(style.headerLogo)}></div>
        </a>
        <NavBar />
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
