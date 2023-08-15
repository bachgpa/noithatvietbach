import clsx from "clsx";

// import style from "./Header.module.scss";
import style from "./Header2.module.scss";
import NavBar from "./NavBar";
// import SearchInput from "./SearchInput";

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
      </div>
    </div>
    // <SearchInput />
  );
}

export default Header;
