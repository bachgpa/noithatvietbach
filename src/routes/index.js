import Home from "../page/home";
import Cart from "../page/cart";
import Products from "../page/products";
import ProductsDetail from "../page/productsDetail";

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
  {
    path: "/products/:productsId",
    component: ProductsDetail,
    layout: "products",
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
