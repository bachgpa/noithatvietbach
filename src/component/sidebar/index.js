import clsx from "clsx";
import style from "./SideBar.module.scss";

function SideBar({ children }) {
  return <div className={clsx(style.SideBar)}>SideBar</div>;
}

export default SideBar;
