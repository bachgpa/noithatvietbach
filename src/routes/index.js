import Home from "../page/home";
import Cart from "../page/cart";
import Products from "../page/products";

// public routes

const publicRoutes = [
  { path: "/", component: Home, layout: "DefaultLayout" },
  {
    path: "/cart",
    component: Cart,
    layout: "DefaultLayout",
  },
  {
    path: "/products",
    component: Products,
    layout: "products",
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
