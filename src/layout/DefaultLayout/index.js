import clsx from "clsx";
// import style from "./DefaultLayout.module.scss";
import style from "./DefaultLayout.module.scss";
import Header from "../../component/header";
import { SearchInput } from "../../component/header/SearchInput";
import { CartBtn } from "../../component/cart";
import Footer from "../../component/footer";

function DefaultLayout({ children }) {
  return (
    <div className={clsx(style.defaultLayoutPart)}>
      <Header />
      <div className={clsx(style.containerPosition)}>
        <div className={clsx(style.container)}>
          <div className={clsx(style.headPart)}>
            <SearchInput />
            <CartBtn />
          </div>
          <div className={clsx(style.content)}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
