// import clsx from "clsx";
// import style from "./DefaultLayout.module.scss";
import SideBar from "../../component/sidebar";
import Header from "../../component/header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
