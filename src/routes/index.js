import Home from "../page/home";
import Cart from "../page/cart";
import Products from "../page/products";
import ProductsDetail from "../page/productsDetail";
import productsCategory from "../page/products/productsCategory";

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
    layout: "DefaultLayout",
  },
  {
    path: "/products/:productsId",
    component: ProductsDetail,
    layout: "DefaultLayout",
  },
  {
    path: "/category",
    component: productsCategory,
    layout: "DefaultLayout",
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
