import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layout";

import "./App.css";
import { productsCategory } from "./assets/context/Context";
import { createContext, useState } from "react";

export const categoryContext = createContext();
export const CardContext = createContext();

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <categoryContext.Provider value={productsCategory}>
      <CardContext.Provider
        value={{ selectedCard, setSelectedCard }}
      >
        <Router>
          <div className="App">
            <Routes>
              {/* map qua file route, lấy ra Layout & Component */}
              {publicRoutes.map((route, index) => {
                var Layout;
                const Page = route.component;
                console.log("app.js:", Page);
                switch (route.layout) {
                  case DefaultLayout:
                    // console.log("default Layout");
                    Layout = DefaultLayout;
                    break;
                  default:
                    // console.log("default");
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
      </CardContext.Provider>
    </categoryContext.Provider>
  );
}

export default App;
