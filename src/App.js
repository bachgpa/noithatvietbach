import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Home from "./page/home";
// import Cart from "./page/cart";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layout";
// import clsx from "clsx";

import "./App.css";
import { productsCategory } from "./assets/context/Context";
import { createContext } from "react";

export const categoryContext = createContext();

function App() {
  return (
    <categoryContext.Provider value={productsCategory}>
      <Router>
        <div className="App">
          <Routes>
            {/* map qua file route, lấy ra Layout & Component */}
            {publicRoutes.map((route, index) => {
              var Layout;
              const Page = route.component;
              switch (route.layout) {
                case DefaultLayout:
                  console.log("default Layout");
                  Layout = DefaultLayout;
                  break;
                default:
                  console.log("default");
                  Layout = DefaultLayout;
                  break;
              }
              // render ra Route với element là Layout chứa page
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {/* <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </div>
      </Router>
    </categoryContext.Provider>
  );
}

export default App;
