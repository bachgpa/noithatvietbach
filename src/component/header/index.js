import clsx from "clsx";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

function Header({ children }) {
  return (
    <div className={clsx(style.Header)}>
      <div className={clsx(style.headerLogo)}></div>

      <div className={clsx(style.topHeader)}>
        <div className={clsx(style.headerTop)}>searchBar</div>
        <div className={clsx(style.headerBot)}>
          <div className={clsx(style.headerOption)}>
            <a className={clsx(style.headerOptionLink)} href="">
              About us
            </a>
          </div>
          <div className={clsx(style.headerOption)}>
            <a className={clsx(style.headerOptionLink)} href="">
              Product
              <FontAwesomeIcon
                className={clsx(style.headerIcon)}
                icon={faCaretDown}
              />
            </a>
          </div>
          <div className={clsx(style.headerOption)}>
            <a className={clsx(style.headerOptionLink)} href="">
              News
            </a>
          </div>
          <div className={clsx(style.headerOption, style.button)}>
            <a className={clsx(style.headerOptionLink)} href="">
              Contact & Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
