import clsx from "clsx";
// import style from "./DefaultLayout.module.scss";
import style from "./DefaultLayout.module.scss";
import Header from "../../component/header";
import { SearchInput } from "../../component/header/SearchInput";

function DefaultLayout({ children }) {
  return (
    <div className={clsx(style.defaultLayoutPart)}>
      <Header />
      <div className={clsx(style.container)}>
        <SearchInput />

        <div className={clsx(style.content)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
