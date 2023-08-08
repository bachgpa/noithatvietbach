import Home from "../page/home";
import Cart from "../page/cart";

// public routes

const publicRoutes = [
  { path: "/", component: Home, layout: "DefaultLayout" },
  { path: "/cart", component: Cart, layout: "DefaultLayout" },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
