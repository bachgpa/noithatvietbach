import "./DefaultLayout.css";
import Header from "../../component/header";
import { SearchInput } from "../../component/header/SearchInput";
import { CartBtn } from "../../component/cart";
import Footer from "../../component/footer";
import { useContext, useEffect, useRef } from "react";
import { CardContext } from "../../App";

function DefaultLayout({ children }) {
  const openSidebarRef = useRef(null);
  const { setToggleSidebar } = useContext(CardContext);
  const { toggleSidebar } = useContext(CardContext);

  useEffect(() => {
    if (!toggleSidebar) {
      openSidebarRef.current.classList.remove("active");
    }
  }, [toggleSidebar]);
  function layoutToggleSidebar() {
    // const openBtn = openSidebarRef.current;

    openSidebarRef.current.classList.toggle("active");
    setToggleSidebar(
      openSidebarRef.current.classList.contains("active")
    );
  }
  return (
    <div className="defaultLayoutPart">
      <Header />
      <div className="containerPosition">
        <div className="container">
          <div className="headPart">
            <div
              className="openSidebar"
              ref={openSidebarRef}
              onClick={layoutToggleSidebar}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <SearchInput />
            <CartBtn />
          </div>
          <div className="content">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
